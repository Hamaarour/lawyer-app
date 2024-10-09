import { useState, useEffect } from "react";
import {
  MoreHorizontal,
  Square,
  Clock,
  FileText,
  FileCheck,
  Plus,
  X,
  Filter,
  ChevronDown,
  Edit,
  Trash2,
  Search,
  ChevronUp,
  ShieldCheck,
  Newspaper,
} from "lucide-react";
// Sample data structure matching your case class
const initialCases = [
  {
    CaseID: 1,
    Title: "Smith vs. Johnson",
    ClientID: 101,
    status: "Active",
    CreateAt: "2024-01-15",
    UpdateAt: "2024-02-20",
    Documents: ["complaint.pdf", "evidence1.pdf"],
    LeadAttorney: "John Doe",
    PracticeArea: "Family Law",
    Office: "New York",
  },
  {
    CaseID: 2,
    Title: "Doe vs. State",
    ClientID: 102,
    status: "Closed",
    CreateAt: "2024-03-10",
    UpdateAt: "2024-04-12",
    Documents: ["pleading.pdf"],
    LeadAttorney: "Jane Smith",
    PracticeArea: "Criminal Law",
    Office: "Los Angeles",
  },
  {
    CaseID: 3,
    Title: "Williams vs. Davis",
    ClientID: 103,
    status: "Active",
    CreateAt: "2024-02-18",
    UpdateAt: "2024-03-25",
    Documents: ["motion.pdf", "discovery.pdf"],
    LeadAttorney: "Alice Brown",
    PracticeArea: "Corporate Law",
    Office: "Chicago",
  },
  {
    CaseID: 4,
    Title: "Taylor vs. Martinez",
    ClientID: 104,
    status: "Pending",
    CreateAt: "2024-05-10",
    UpdateAt: "2024-06-15",
    Documents: ["contract.pdf"],
    LeadAttorney: "Michael Green",
    PracticeArea: "Contract Law",
    Office: "Miami",
  },
  {
    CaseID: 5,
    Title: "Garcia vs. Evans",
    ClientID: 105,
    status: "Closed",
    CreateAt: "2023-11-01",
    UpdateAt: "2023-12-20",
    Documents: ["settlement.pdf"],
    LeadAttorney: "Laura Johnson",
    PracticeArea: "Real Estate Law",
    Office: "Houston",
  },
  {
    CaseID: 6,
    Title: "Brown vs. Robinson",
    ClientID: 106,
    status: "Active",
    CreateAt: "2024-02-05",
    UpdateAt: "2024-03-12",
    Documents: ["evidence2.pdf", "summary.pdf"],
    LeadAttorney: "David Miller",
    PracticeArea: "Personal Injury",
    Office: "San Francisco",
  },
  {
    CaseID: 7,
    Title: "Anderson vs. Clark",
    ClientID: 107,
    status: "Active",
    CreateAt: "2024-04-08",
    UpdateAt: "2024-05-10",
    Documents: ["affidavit.pdf", "testimony.pdf"],
    LeadAttorney: "Emma Lee",
    PracticeArea: "Employment Law",
    Office: "Seattle",
  },
  {
    CaseID: 8,
    Title: "Harris vs. Lewis",
    ClientID: 108,
    status: "Pending",
    CreateAt: "2024-03-15",
    UpdateAt: "2024-04-18",
    Documents: ["agreement.pdf"],
    LeadAttorney: "Robert Wilson",
    PracticeArea: "Bankruptcy Law",
    Office: "Denver",
  },
  {
    CaseID: 9,
    Title: "Martinez vs. White",
    ClientID: 109,
    status: "Active",
    CreateAt: "2024-05-22",
    UpdateAt: "2024-06-29",
    Documents: ["complaint.pdf", "motion2.pdf"],
    LeadAttorney: "Sophia Hernandez",
    PracticeArea: "Intellectual Property",
    Office: "Austin",
  },
  {
    CaseID: 10,
    Title: "Moore vs. Gonzalez",
    ClientID: 110,
    status: "Closed",
    CreateAt: "2023-10-15",
    UpdateAt: "2023-12-01",
    Documents: ["contract_dispute.pdf"],
    LeadAttorney: "William Martinez",
    PracticeArea: "Business Law",
    Office: "Boston",
  },
  {
    CaseID: 11,
    Title: "King vs. Wright",
    ClientID: 111,
    status: "Pending",
    CreateAt: "2024-01-20",
    UpdateAt: "2024-03-05",
    Documents: ["subpoena.pdf", "exhibit1.pdf"],
    LeadAttorney: "Olivia Taylor",
    PracticeArea: "Civil Rights Law",
    Office: "Washington, D.C.",
  },
  {
    CaseID: 12,
    Title: "Hill vs. Scott",
    ClientID: 112,
    status: "Active",
    CreateAt: "2024-06-12",
    UpdateAt: "2024-07-01",
    Documents: ["witness_statement.pdf"],
    LeadAttorney: "James Harris",
    PracticeArea: "Immigration Law",
    Office: "Phoenix",
  },
  {
    CaseID: 13,
    Title: "Young vs. Adams",
    ClientID: 113,
    status: "Closed",
    CreateAt: "2023-09-30",
    UpdateAt: "2023-11-10",
    Documents: ["settlement_agreement.pdf"],
    LeadAttorney: "Charlotte King",
    PracticeArea: "Family Law",
    Office: "Philadelphia",
  },
  {
    CaseID: 14,
    Title: "Walker vs. Nelson",
    ClientID: 114,
    status: "Active",
    CreateAt: "2024-07-05",
    UpdateAt: "2024-08-10",
    Documents: ["petition.pdf", "deposition.pdf"],
    LeadAttorney: "Ethan Parker",
    PracticeArea: "Tax Law",
    Office: "San Diego",
  },
];

const filterOptions = {
  LeadAttorney: ["John Doe", "Jane Smith", "Bob Wilson"],
  PracticeArea: ["Family Law", "Criminal Law", "Corporate Law", "Real Estate"],
  Office: ["New York", "Los Angeles", "Chicago", "Houston"],
  status: ["Active", "Pending", "Closed"],
};

const FilterDropdown = ({ onClose, onAddFilter }) => {
  const [selectedField, setSelectedField] = useState("");
  const [selectedOperator, setSelectedOperator] = useState("equals");
  const [selectedValue, setSelectedValue] = useState("");

  const operators = {
    string: ["equals", "contains", "starts with", "ends with"],
    number: ["equals", "greater than", "less than"],
    date: ["equals", "after", "before"],
  };

  const fieldTypes = {
    LeadAttorney: "string",
    PracticeArea: "string",
    Office: "string",
    status: "string",
    ClientID: "number",
    CreateAt: "date",
    UpdateAt: "date",
  };

  const handleAddFilter = () => {
    if (selectedField && selectedValue) {
      onAddFilter({
        field: selectedField,
        operator: selectedOperator,
        value: selectedValue,
      });
    }
  };

  return (
    <div className="absolute top-full mt-2 right-0 bg-white rounded-lg shadow-lg p-4 z-10 w-80">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Add Filter</h3>
        <button onClick={() => onClose(null)}>
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Field</label>
          <select
            className="w-full p-2 border rounded"
            value={selectedField}
            onChange={(e) => {
              setSelectedField(e.target.value);
              setSelectedOperator("equals");
              setSelectedValue("");
            }}
          >
            <option value="">Select field</option>
            {Object.keys(filterOptions).map((field) => (
              <option key={field} value={field}>
                {field}
              </option>
            ))}
          </select>
        </div>
        {selectedField && (
          <div>
            <label className="block text-sm font-medium mb-1">Operator</label>
            <select
              className="w-full p-2 border rounded"
              value={selectedOperator}
              onChange={(e) => setSelectedOperator(e.target.value)}
            >
              {operators[fieldTypes[selectedField]].map((op) => (
                <option key={op} value={op}>
                  {op}
                </option>
              ))}
            </select>
          </div>
        )}
        <div>
          <label className="block text-sm font-medium mb-1">Value</label>
          {fieldTypes[selectedField] === "string" ||
          fieldTypes[selectedField] === "number" ? (
            <select
              className="w-full p-2 border rounded"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            >
              <option value="">Select value</option>
              {selectedField &&
                filterOptions[selectedField]?.map((value) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
            </select>
          ) : (
            <input
              type="date"
              className="w-full p-2 border rounded"
              value={selectedValue}
              onChange={(e) => setSelectedValue(e.target.value)}
            />
          )}
        </div>
        <button
          onClick={handleAddFilter}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add Filter
        </button>
      </div>
    </div>
  );
};

const FilterTag = ({ filter, onRemove }) => (
  <div className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
    <span className="text-sm">{`${filter.field} ${filter.operator} ${filter.value}`}</span>
    <button onClick={() => onRemove(filter)} className="ml-2">
      <X className="h-4 w-4" />
    </button>
  </div>
);

const AddCaseForm = ({ isOpen, onClose, onAddCase }) => {
  const [formData, setFormData] = useState({
    Title: "",
    ClientID: "",
    status: "Active",
    Documents: [],
    LeadAttorney: "",
    PracticeArea: "",
    Office: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data
    if (
      !formData.Title ||
      !formData.ClientID ||
      !formData.LeadAttorney ||
      !formData.PracticeArea ||
      !formData.Office
    ) {
      alert("Please fill in all required fields.");
      return;
    }

    const newCase = {
      ...formData,
      CaseID: Date.now(), // Simple unique ID
      CreateAt: new Date().toISOString().split("T")[0],
      UpdateAt: new Date().toISOString().split("T")[0],
    };

    onAddCase(newCase);
    setFormData({
      Title: "",
      ClientID: "",
      status: "Active",
      Documents: [],
      LeadAttorney: "",
      PracticeArea: "",
      Office: "",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Add New Case</h2>
          <button onClick={onClose}>
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={formData.Title}
              onChange={(e) =>
                setFormData({ ...formData, Title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Client ID</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={formData.ClientID}
              onChange={(e) =>
                setFormData({ ...formData, ClientID: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Status</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.status}
              onChange={(e) =>
                setFormData({ ...formData, status: e.target.value })
              }
            >
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Closed">Closed</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Lead Attorney
            </label>
            <select
              className="w-full p-2 border rounded"
              value={formData.LeadAttorney}
              onChange={(e) =>
                setFormData({ ...formData, LeadAttorney: e.target.value })
              }
              required
            >
              <option value="">Select Lead Attorney</option>
              {filterOptions.LeadAttorney.map((attorney) => (
                <option key={attorney} value={attorney}>
                  {attorney}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">
              Practice Area
            </label>
            <select
              className="w-full p-2 border rounded"
              value={formData.PracticeArea}
              onChange={(e) =>
                setFormData({ ...formData, PracticeArea: e.target.value })
              }
              required
            >
              <option value="">Select Practice Area</option>
              {filterOptions.PracticeArea.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Office</label>
            <select
              className="w-full p-2 border rounded"
              value={formData.Office}
              onChange={(e) =>
                setFormData({ ...formData, Office: e.target.value })
              }
              required
            >
              <option value="">Select Office</option>
              {filterOptions.Office.map((office) => (
                <option key={office} value={office}>
                  {office}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Documents</label>
            <input
              type="file"
              multiple
              className="w-full p-2 border rounded"
              onChange={(e) => {
                const fileNames = Array.from(e.target.files).map(
                  (file) => file.name
                );
                setFormData({ ...formData, Documents: fileNames });
              }}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add Case
          </button>
        </form>
      </div>
    </div>
  );
};

const Cases = () => {
  const [cases, setCases] = useState(initialCases);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState([]);
  const [filteredCases, setFilteredCases] = useState(initialCases);
  const [sortColumn, setSortColumn] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortOrder("asc");
    }
  };

  const sortedCases = [...cases].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortOrder === "asc" ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortOrder === "asc" ? 1 : -1;
    return 0;
  });

  useEffect(() => {
    applyFilters();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cases, activeFilters]);

  const handleAddFilter = (newFilter) => {
    if (newFilter) {
      setActiveFilters([...activeFilters, newFilter]);
    }
    setIsFilterOpen(false);
  };

  const handleRemoveFilter = (filterToRemove) => {
    setActiveFilters(
      activeFilters.filter(
        (filter) =>
          filter.field !== filterToRemove.field ||
          filter.value !== filterToRemove.value ||
          filter.operator !== filterToRemove.operator
      )
    );
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
  };

  const applyFilters = () => {
    let updatedCases = [...cases];
    activeFilters.forEach((filter) => {
      const { field, operator, value } = filter;
      switch (operator) {
        case "equals":
          updatedCases = updatedCases.filter(
            (c) =>
              String(c[field]).toLowerCase() === String(value).toLowerCase()
          );
          break;
        case "contains":
          updatedCases = updatedCases.filter((c) =>
            String(c[field]).toLowerCase().includes(String(value).toLowerCase())
          );
          break;
        case "starts with":
          updatedCases = updatedCases.filter((c) =>
            String(c[field])
              .toLowerCase()
              .startsWith(String(value).toLowerCase())
          );
          break;
        case "ends with":
          updatedCases = updatedCases.filter((c) =>
            String(c[field]).toLowerCase().endsWith(String(value).toLowerCase())
          );
          break;
        case "greater than":
          updatedCases = updatedCases.filter(
            (c) => Number(c[field]) > Number(value)
          );
          break;
        case "less than":
          updatedCases = updatedCases.filter(
            (c) => Number(c[field]) < Number(value)
          );
          break;
        case "after":
          updatedCases = updatedCases.filter(
            (c) => new Date(c[field]) > new Date(value)
          );
          break;
        case "before":
          updatedCases = updatedCases.filter(
            (c) => new Date(c[field]) < new Date(value)
          );
          break;
        default:
          break;
      }
    });
    setFilteredCases(updatedCases);
  };

  const handleAddCase = (newCase) => {
    setCases([newCase, ...cases]);
    setIsFormOpen(false);
  };

  const handleDeleteCase = (caseID) => {
    if (window.confirm("Are you sure you want to delete this case?")) {
      setCases(cases.filter((c) => c.CaseID !== caseID));
    }
  };

  const handleEditCase = (caseToEdit) => {
    const newTitle = prompt("Enter new title:", caseToEdit.Title);
    if (newTitle) {
      const updatedCase = {
        ...caseToEdit,
        Title: newTitle,
        UpdateAt: new Date().toISOString().split("T")[0],
      };
      setCases(
        cases.map((c) => (c.CaseID === updatedCase.CaseID ? updatedCase : c))
      );
    }
  };
  const metrics = [
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: "Active Cases",
      value: filteredCases.filter((c) => c.status === "Active").length,
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FileCheck className="h-5 w-5" />,
      title: "Closed Cases",
      value: filteredCases.filter((c) => c.status === "Closed").length,
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Pending Cases",
      value: filteredCases.filter((c) => c.status === "Pending").length,
      color: "bg-pink-100 text-pink-600",
    },
    {
      icon: <FileText className="h-5 w-5" />,
      title: "Total Documents",
      value: filteredCases.reduce(
        (acc, curr) => acc + curr.Documents.length,
        0
      ),
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Newspaper className="h-5 w-5" />,
      title: "Cases Updated (Last 30 days)",
      value: filteredCases.filter(
        (c) =>
          new Date(c.UpdateAt) > new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
      ).length,
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <div className="p-6 bg-gray-50 space-y-6">
      {/* Header with Add Case button */}
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-semibold">Cases Insights</h1>
        <div className="flex gap-4">
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            <Plus className="h-5 w-5" />
            Add Case
          </button>
          <button
            onClick={() => {
              alert("More options coming soon!");
            }}
            className="p-2"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Add Case Form Modal */}
      <AddCaseForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onAddCase={handleAddCase}
      />

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-4">
            {["LeadAttorney", "PracticeArea", "Office", "status"].map(
              (field, index) => (
                <div key={index} className="relative">
                  <select
                    className="appearance-none w-[180px] px-4 py-2 border rounded-md text-gray-500"
                    onChange={(e) => {
                      if (e.target.value) {
                        setActiveFilters([
                          ...activeFilters,
                          { field, operator: "equals", value: e.target.value },
                        ]);
                      }
                    }}
                  >
                    <option value="">Select {field}</option>
                    {filterOptions[field]?.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                    <ChevronDown />
                  </div>
                </div>
              )
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Add Filter
            </button>
            {isFilterOpen && (
              <FilterDropdown
                onClose={() => setIsFilterOpen(false)}
                onAddFilter={handleAddFilter}
              />
            )}
          </div>
        </div>

        {/* Active Filters */}
        {activeFilters.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {activeFilters.map((filter, index) => (
              <FilterTag
                key={index}
                filter={filter}
                onRemove={handleRemoveFilter}
              />
            ))}
            <button
              onClick={clearAllFilters}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              Clear all
            </button>
          </div>
        )}

        {/* Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {metrics.map((item, index) => (
            <div key={index} className={`${item.color} rounded-lg p-4`}>
              <div className="mb-2">{item.icon}</div>
              <h3 className="text-sm font-medium mb-2">{item.title}</h3>
              <p className="text-2xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Cases List */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Cases List</h2>
          <button
            onClick={() => {
              alert("More options coming soon!");
            }}
            className="p-2"
          >
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                {[
                  "CaseID",
                  "Title",
                  "ClientID",
                  "Status",
                  "LeadAttorney",
                  "PracticeArea",
                  "Office",
                  "Actions",
                ].map((header) => (
                  <th
                    key={header}
                    className="px-6 py-3 cursor-pointer hover:bg-gray-100"
                    onClick={() => handleSort(header)}
                  >
                    <div className="flex items-center">
                      {header}
                      {sortColumn === header &&
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
              {sortedCases.length > 0 ? (
                sortedCases.map((c) => (
                  <tr
                    key={c.CaseID}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {c.CaseID}
                    </td>
                    <td className="px-6 py-4">{c.Title}</td>
                    <td className="px-6 py-4">{c.ClientID}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium
              ${
                c.status === "Active"
                  ? "bg-green-100 text-green-800"
                  : c.status === "Pending"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
              }`}
                      >
                        {c.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">{c.LeadAttorney}</td>
                    <td className="px-6 py-4">{c.PracticeArea}</td>
                    <td className="px-6 py-4">{c.Office}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => handleEditCase(c)}
                          className="text-blue-600 hover:text-blue-900"
                          title="Edit"
                        >
                          <Edit className="h-5 w-5" />
                        </button>
                        <button
                          onClick={() => handleDeleteCase(c.CaseID)}
                          className="text-red-600 hover:text-red-900"
                          title="Delete"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="8"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No cases found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cases;
