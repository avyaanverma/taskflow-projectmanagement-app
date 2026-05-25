import React, { useState } from "react";
import { useTheme } from "../../context/ThemeContext";

const appearanceColors = [
  "#111827",
  "#4F46E5",
  "#7C3AED",
  "#2563EB",
  "#0EA5E9",
  "#14B8A6",
  "#22C55E",
  "#EAB308",
  "#F97316",
  "#EF4444",
];

const initialMembers = [
  {
    id: 1,
    name: "Frankie Sullivan",
    email: "frankie@untitledui.com",
    role: "Owner",
    badge: "You",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  }
];

const CreateProject = ({closeForm}) => {
  const {theme} = useTheme();
  console.log(theme)
  const [teamName, setTeamName] = useState("New Dashboard Ideation");
  const [teamDescription, setTeamDescription] = useState(
    "Create a workspace for your team and manage collaboration in one place."
  );
  const [selectedColor, setSelectedColor] = useState("#7C3AED");
  const [members, setMembers] = useState(initialMembers);
  const [memberSearch, setMemberSearch] = useState("");

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(memberSearch.toLowerCase()) ||
      member.email.toLowerCase().includes(memberSearch.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-10 sm:p-4 bg-black/80 bg-blur-2xl">
      <div
        className={`w-full max-w-3xl rounded-4xl border-4 overflow-hidden shadow-2xl transition-colors duration-300 flex flex-col max-h-[calc(100vh-2rem)] sm:max-h-[calc(100vh-3rem)] ${
          theme === "dark"
            ? "border-black bg-slate-900"
            : "border-black bg-white"
        }`}
      >
        <div
          className={`px-4 py-4 border-b transition-colors duration-300 ${
            theme === "dark" ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-full bg-violet-100 dark:bg-violet-950 flex items-center justify-center shadow-sm">
                <div className="h-9 w-9 rounded-full bg-white dark:bg-slate-800 border border-violet-200 dark:border-violet-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-2 left-2 h-2 w-2 rounded-full bg-violet-500" />
                  <div className="absolute bottom-2 right-2 h-3 w-3 rounded-full bg-violet-600" />
                  <div className="absolute inset-0 flex items-center justify-center text-violet-500 text-sm">
                    ✦
                  </div>
                </div>
              </div>

              <div>
                <h1 className="text-2xl font-semibold tracking-tight">
                  Create a new team
                </h1>
                <p
                  className={`text-xs mt-1 ${
                    theme === "dark" ? "text-slate-400" : "text-slate-500"
                  }`}
                >
                  Change how your workspace looks and feels in your browser.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={()=>closeForm(false)}
                className={`text-xl leading-none transition-colors ${
                  theme === "dark"
                    ? "text-slate-400 hover:text-white"
                    : "text-slate-400 hover:text-slate-700"
                }`}
                aria-label="Close"
              >
                ×
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className={`p-6 border-b lg:border-b-0 lg:border-r transition-colors duration-300 ${
              theme === "dark" ? "border-slate-800" : "border-slate-200"
            }`}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Team name
                </label>
                <input
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none transition-colors ${
                    theme === "dark"
                      ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500"
                      : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-violet-500"
                  }`}
                  placeholder="Enter team name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Team description
                </label>
                <textarea
                  value={teamDescription}
                  onChange={(e) => setTeamDescription(e.target.value)}
                  rows={4}
                  className={`w-full rounded-lg border px-4 py-3 text-sm outline-none resize-none transition-colors ${
                    theme === "dark"
                      ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500"
                      : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-violet-500"
                  }`}
                  placeholder="Describe your team"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Appearance
                </label>

                <div className="flex flex-wrap justify-start items-start gap-2">
                  {appearanceColors.map((color) => {
                    const selected = selectedColor === color;
                    return (
                      <button
                        key={color}
                        type="button"
                        onClick={() => setSelectedColor(color)}
                        className={`h-8 w-8 rounded-full transition-all border-2 ${
                          selected
                            ? "ring-2 ring-violet-400 ring-offset-2 dark:ring-offset-slate-900 scale-110"
                            : "border-transparent hover:scale-105"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    );
                  })}

                  <div className="flex items-center gap-2 ml-1">
                    <span
                      className={`text-sm ${
                        theme === "dark" ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      Custom color
                    </span>
                    <input
                      value={selectedColor}
                      onChange={(e) => setSelectedColor(e.target.value)}
                      className={`w-28 rounded-md border px-3 py-2 text-sm outline-none transition-colors ${
                        theme === "dark"
                          ? "bg-slate-800 border-slate-700 text-white"
                          : "bg-white border-slate-200 text-slate-700"
                      }`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-medium">Members</label>
              <button
                className={`text-sm font-medium ${
                  theme === "dark"
                    ? "text-violet-400 hover:text-violet-300"
                    : "text-violet-600 hover:text-violet-700"
                }`}
              >
                More options
              </button>
            </div>

            <div className="relative mb-4">
              <svg
                className={`absolute left-3 top-1/2 -translate-y-1/2 ${
                  theme === "dark" ? "text-slate-500" : "text-slate-400"
                }`}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M21 21l-4.35-4.35m1.85-5.4a7.15 7.15 0 1 1-14.3 0 7.15 7.15 0 0 1 14.3 0Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <input
                value={memberSearch}
                onChange={(e) => setMemberSearch(e.target.value)}
                placeholder="Add members by name or email"
                className={`w-full rounded-lg border pl-10 pr-4 py-3 text-sm outline-none transition-colors ${
                  theme === "dark"
                    ? "bg-slate-800 border-slate-700 text-white placeholder:text-slate-500 focus:border-violet-500"
                    : "bg-white border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-violet-500"
                }`}
              />
            </div>

            <div className="space-y-3">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className={`flex items-center justify-between rounded-xl px-2 py-2 transition-colors ${
                    theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="h-10 w-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium">{member.name}</p>
                        {member.badge ? (
                          <span
                            className={`text-[11px] font-medium rounded-full px-2 py-0.5 ${
                              theme === "dark"
                                ? "bg-slate-800 text-slate-400"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {member.badge}
                          </span>
                        ) : null}
                      </div>
                      <p
                        className={`text-sm ${
                          theme === "dark" ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        {member.email}
                      </p>
                    </div>
                  </div>

                  <button className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-200">
                    {member.role}
                    <span>▾</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>

        <div
          className={`px-6 py-4 flex items-center justify-between border-t transition-colors duration-300 ${
            theme === "dark" ? "border-slate-800" : "border-slate-200"
          }`}
        >
          <button
            className={`text-sm font-medium ${
              theme === "dark"
                ? "text-slate-400 hover:text-slate-200"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            Reset to default
          </button>

          <div className="flex items-center gap-3">
            <button
              onClick={()=>closeForm(false)}
              className={`rounded-lg border px-5 py-2.5 text-sm font-medium transition-colors ${
                theme === "dark"
                  ? "border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700"
                  : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
              }`}
            >
              Cancel
            </button>
            <button
              className="rounded-lg px-5 py-2.5 text-sm font-medium text-white shadow-sm"
              style={{ backgroundColor: selectedColor }}
            >
              Create team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProject;
