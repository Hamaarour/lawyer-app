import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { Plus, Edit, Trash2, X, ChevronDown, ChevronUp } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const clientSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\d{3}-\d{3}-\d{4}$/, "Phone must be in format 123-456-7890"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  status: z.enum(["Active", "Inactive", "Pending"]),
});

const ClientList = () => {
  const [clients, setClients] = useState([
    {
      id: 1,
      fullName: "John Doe",
      email: "john@example.com",
      phone: "123-456-7890",
      address: "123 Main St, Apt 4B, New York, NY 10001, United States",

      caseIds: [101, 102],
    },
    {
      id: 2,
      fullName: "Jane Smith",
      email: "jane@example.com",
      phone: "987-654-3210",
      address: "456 Elm St, Suite 789, Los Angeles, CA 90001, United States",

      caseIds: [103],
    },
  ]);

  const [modalMode, setModalMode] = useState(null);
  const [editingClientId, setEditingClientId] = useState(null);
  const [expandedAddresses, setExpandedAddresses] = useState({});
  const [sortColumn, setSortColumn] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(clientSchema),
  });

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedClients = useMemo(() => {
    return [...clients].sort((a, b) => {
      if (a[sortColumn] < b[sortColumn]) return sortOrder === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortOrder === "asc" ? 1 : -1;
      return 0;
    });
  }, [clients, sortColumn, sortOrder]);

  const onSubmit = (data) => {
    if (modalMode === "add") {
      const newClient = { ...data, id: Date.now(), caseIds: [] };
      setClients([...clients, newClient]);
    } else if (modalMode === "edit") {
      setClients(
        clients.map((client) =>
          client.id === editingClientId ? { ...client, ...data } : client
        )
      );
    }
    closeModal();
  };

  const handleAddClient = () => {
    setModalMode("add");
    reset({});
  };

  const handleEditClient = (client) => {
    setModalMode("edit");
    setEditingClientId(client.id);
    reset(client);
  };

  const handleDeleteClient = (id) => {
    if (window.confirm("Are you sure you want to delete this client?")) {
      setClients(clients.filter((client) => client.id !== id));
    }
  };

  const closeModal = () => {
    setModalMode(null);
    setEditingClientId(null);
    reset({});
  };

  const toggleAddressExpansion = (id) => {
    setExpandedAddresses((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Client List</h1>
        <button
          onClick={handleAddClient}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded inline-flex items-center transition duration-300"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Client
        </button>
      </div>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {[
                "ID",
                "Full Name",
                "Email",
                "Phone",
                "Address",
                "Cases",
                "Actions",
              ].map((header) => (
                <th
                  key={header}
                  className="px-6 py-3 cursor-pointer hover:bg-gray-100"
                  onClick={() =>
                    handleSort(header.toLowerCase().replace(" ", ""))
                  }
                >
                  <div className="flex items-center">
                    {header}
                    {sortColumn === header.toLowerCase().replace(" ", "") &&
                      (sortOrder === "asc" ? (
                        <ChevronUp className="w-4 h-4 ml-1" />
                      ) : (
                        <ChevronDown className="w-4 h-4 ml-1" />
                      ))}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedClients.map((client) => (
              <tr
                key={client.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {client.id}
                </td>
                <td className="px-6 py-4">{client.fullName}</td>
                <td className="px-6 py-4">{client.email}</td>
                <td className="px-6 py-4">{client.phone}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span
                      className={`${
                        expandedAddresses[client.id] ? "" : "truncate"
                      } max-w-xs`}
                    >
                      {expandedAddresses[client.id]
                        ? client.address
                            .split(", ")
                            .map((line, index) => <div key={index}>{line}</div>)
                        : client.address}
                    </span>
                    <button
                      onClick={() => toggleAddressExpansion(client.id)}
                      className="ml-2 text-gray-500 hover:text-gray-700"
                    >
                      {expandedAddresses[client.id] ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </div>
                </td>

                <td className="px-6 py-4">{client.caseIds.join(", ")}</td>
                <td className="px-6 py-4">
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => handleEditClient(client)}
                      className="text-blue-600 hover:text-blue-900"
                      title="Edit"
                    >
                      <Edit className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDeleteClient(client.id)}
                      className="text-red-600 hover:text-red-900"
                      title="Delete"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {modalMode && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex items-center justify-center">
          <div className="relative p-8 border w-full max-w-md shadow-lg rounded-md bg-white">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-semibold text-gray-900">
                {modalMode === "add" ? "Add New Client" : "Edit Client"}
              </h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-500 transition duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Full Name
                </label>
                <input
                  {...register("fullName")}
                  type="text"
                  id="fullName"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.fullName.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Phone
                </label>
                <input
                  {...register("phone")}
                  type="tel"
                  id="phone"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.phone.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="address"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Address
                </label>
                <textarea
                  {...register("address")}
                  id="address"
                  rows="3"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                {errors.address && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="status"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Status
                </label>
                <select
                  {...register("status")}
                  id="status"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                  <option value="Pending">Pending</option>
                </select>
                {errors.status && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.status.message}
                  </p>
                )}
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  {modalMode === "add" ? "Add Client" : "Update Client"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ClientList;
