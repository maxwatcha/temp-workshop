import Datepicker from './components/Datepicker'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden grid grid-cols-12">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3 lg:col-span-2 bg-white/60 p-6 border-r">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 rounded-md bg-purple-300" />
            <span className="font-semibold">Academy</span>
          </div>
          <nav className="space-y-3">
            <button className="w-full text-left px-3 py-2 rounded-lg bg-purple-100 text-purple-700">Dashboard</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Courses</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Chats</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Grades</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Schedule</button>
            <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-gray-100">Settings</button>
          </nav>
        </aside>

        {/* Main area */}
        <main className="col-span-12 md:col-span-9 lg:col-span-10 p-6">
          {/* Header */}
          <header className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Dashboard</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  className="w-64 px-4 py-2 rounded-full border border-gray-200 shadow-sm"
                  placeholder="Search"
                />
              </div>
              <div className="flex items-center gap-3">
                <div className="text-sm text-gray-600">Esther Howard</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-yellow-300" />
              </div>
            </div>
          </header>

          <div className="grid grid-cols-12 gap-6">
            {/* Left main content */}
            <section className="col-span-12 lg:col-span-8">
              {/* New Courses cards */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">New Courses</h3>
                  <a className="text-sm text-purple-600">View All</a>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-orange-50 rounded-lg shadow-sm">
                    <div className="h-24 rounded-md bg-orange-200 mb-3" />
                    <div className="font-semibold">Geography</div>
                    <div className="text-sm text-gray-500">12 lessons</div>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg shadow-sm">
                    <div className="h-24 rounded-md bg-purple-200 mb-3" />
                    <div className="font-semibold">JavaScript Course</div>
                    <div className="text-sm text-gray-500">15 lessons</div>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg shadow-sm">
                    <div className="h-24 rounded-md bg-blue-200 mb-3" />
                    <div className="font-semibold">Photography Course</div>
                    <div className="text-sm text-gray-500">8 lessons</div>
                  </div>
                </div>
              </div>

              {/* My Courses list */}
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-semibold mb-3">My Courses</h4>
                <ul className="space-y-3">
                  <li className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Web Design</div>
                      <div className="text-sm text-gray-500">10 lessons</div>
                    </div>
                    <div className="text-sm text-gray-500">May 12</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Development Basics</div>
                      <div className="text-sm text-gray-500">8 lessons</div>
                    </div>
                    <div className="text-sm text-gray-500">May 14</div>
                  </li>
                  <li className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">Data with Python</div>
                      <div className="text-sm text-gray-500">5 lessons</div>
                    </div>
                    <div className="text-sm text-gray-500">May 17</div>
                  </li>
                </ul>
              </div>
            </section>

            {/* Right sidebar (profile + calendar) */}
            <aside className="col-span-12 lg:col-span-4 space-y-6">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-300 to-pink-300" />
                <div>
                  <div className="font-semibold">Esther Howard</div>
                  <div className="text-sm text-gray-500">Elementary</div>
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-semibold">Calendar</h5>
                  <div className="text-sm text-gray-400">May 2022</div>
                </div>
                <Datepicker />
              </div>

              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h5 className="font-semibold mb-2">Homework progress</h5>
                <div className="text-sm text-gray-500">Styling with CSS — 50% complete</div>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  )
}
