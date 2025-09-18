export default function Sidebar() {
  return (
    <aside className="col-span-12 md:col-span-3 lg:col-span-2 p-6 border-r border-transparent bg-white/0">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-8 h-8 rounded-md bg-purple-300" />
        <span className="font-semibold text-gray-700">Academy</span>
      </div>
      <nav className="space-y-3">
        <button className="w-full text-left px-3 py-2 rounded-lg bg-purple-200 text-purple-800 shadow-sm">Dashboard</button>
        <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Courses</button>
        <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Chats</button>
        <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Grades</button>
        <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Schedule</button>
        <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Settings</button>
      </nav>
    </aside>
  )
}
