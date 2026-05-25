// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Item Operations - WarehouseOps Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, Bell, CircleHelp, ListFilter, LogOut, PackageSearch, Plus, RefreshCw, Search, Settings, TriangleAlert, Wrench, X } from "lucide-react";


export type ItemOperationsWarehouseopsConsoleActionId = "notifications-1" | "help-2" | "logout-3" | "create-new-item-4" | "retry-load-5" | "close-6" | "dispatch-technician-7" | "view-full-history-8" | "item-operations-1" | "queue-and-status-2" | "insights-3" | "settings-4";

export interface ItemOperationsWarehouseopsConsoleProps {
  actions?: Partial<Record<ItemOperationsWarehouseopsConsoleActionId, () => void>>;
}

export function ItemOperationsWarehouseopsConsole({ actions }: ItemOperationsWarehouseopsConsoleProps) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="w-sidebar-width h-screen sticky top-0 left-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-gutter-default shrink-0">
      {/* Header/Brand */}
      <div className="px-container-padding mb-8">
      <div className="flex items-center gap-3">
      <img alt="WarehouseOps Logo" className="w-8 h-8 rounded-full shadow-sm" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYCIt006U1DWIlHVnY-2ZGVn4YTnCQffGxW7Nri9dEbBU2K-PmrrkvFSLsaqDiubDDgeR7JtWAdArcrQy0GyG0L7BJLh3ywlz9azKPeW96A7m89X3bfDdNJzAQYxHbllIR1oCjZGhtfImC0_RJt2ipk8-D4n8FLuCAOLi09Pwr3-0A_B0q-lESjKsagWG8r_omNiNHmdjdW1h39pPbV-tDb8gsNI7wBzzOXFbnUvm0dg591tnpMnVJ2xoDzIN4f7H8uPOCEc29UL2H" />
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary">WarehouseOps</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Console v1.0</p>
      </div>
      </div>
      </div>
      {/* Navigation Tabs */}
      <ul className="flex-1 flex flex-col gap-1 px-2 font-body-md text-body-md">
      {/* Active Tab: Item Operations */}
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-primary border-l-4 border-primary bg-surface-container-high rounded-r transition-colors duration-200" href="#" data-action-id="item-operations-1" onClick={actions?.["item-operations-1"]}>
      <PackageSearch  data-weight="fill" style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                          Item Operations
                      </a>
      </li>
      {/* Inactive Tabs */}
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low border-l-4 border-transparent hover:text-on-surface transition-colors duration-200 rounded-r" href="#" data-action-id="queue-and-status-2" onClick={actions?.["queue-and-status-2"]}>
      <BadgeHelp aria-hidden={true} focusable="false" />
                          Queue &amp; Status
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low border-l-4 border-transparent hover:text-on-surface transition-colors duration-200 rounded-r" href="#" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <BadgeHelp aria-hidden={true} focusable="false" />
                          Insights
                      </a>
      </li>
      <li>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low border-l-4 border-transparent hover:text-on-surface transition-colors duration-200 rounded-r" href="#" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings aria-hidden={true} focusable="false" />
                          Settings
                      </a>
      </li>
      </ul>
      {/* Bottom User Profile Area (Optional enhancement for structural completeness) */}
      <div className="px-4 mt-auto">
      <div className="flex items-center gap-3 p-3 rounded bg-surface-container border border-outline-variant hover:bg-surface-container-high cursor-pointer transition-colors">
      <img alt="User profile" className="w-8 h-8 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6MdJcAHTX2qBcG6vWMWk-wSYDYdZac8DZX-nzbk66HqgZ4h07-fjEQ_d8gR03RUT77OwUmaFpsISAJBxQmPaRjduq8xg24IZgQ8phjQx5eirJ_N1UiefQsTvgXN_xduvqJQlT9qXu8LeJNE9LZo07ZEomFVTGbZVWBJfhyDoJsNwEbkNvbp5ZBNdua4Ldh27vEU6AweKvGcVAjCjObOrUp4olYeom5si3bi31td3Gt-5wwSUYuUJdjiYSGIjEJJ_lRJyL4PxpwhWQ" />
      <div className="flex-1 min-w-0">
      <p className="font-body-md text-body-md text-on-surface truncate">Admin User</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant truncate">Night Shift</p>
      </div>
      <BadgeHelp className="text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden bg-surface">
      {/* TopNavBar (Shared Component) */}
      <header className="h-row-height-md w-full sticky top-0 z-10 bg-surface-container border-b border-outline-variant flex justify-between items-center px-container-padding gap-gutter-default shrink-0 font-label-md text-label-md">
      {/* Search Bar on Left */}
      <div className="flex-1 max-w-md relative flex items-center">
      <Search className="absolute left-3 text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-highest border border-outline-variant text-on-surface rounded py-1 pl-9 pr-3 focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-shadow font-label-md text-label-md h-8" id="ACT_SEARCH_RECORDS" placeholder="Global search..." type="text" />
      </div>
      {/* Trailing Icons */}
      <div className="flex items-center gap-4 text-on-surface-variant">
      <button className="hover:text-on-surface transition-colors duration-150 active:scale-95" title="Notifications" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell aria-hidden={true} focusable="false" />
      </button>
      <button className="hover:text-on-surface transition-colors duration-150 active:scale-95" title="Help" type="button" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp aria-hidden={true} focusable="false" />
      </button>
      <button className="hover:text-on-surface transition-colors duration-150 active:scale-95" title="Logout" type="button" data-action-id="logout-3" onClick={actions?.["logout-3"]}>
      <LogOut aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Scrollable Canvas */}
      <div className="flex-1 overflow-auto p-container-padding flex flex-col gap-6">
      {/* Page Header & Metrics Bento Grid */}
      <section className="flex flex-col md:flex-row gap-4 items-stretch">
      {/* Title Area */}
      <div className="flex-1">
      <h2 className="font-display-sm text-display-sm text-on-surface mb-1">Item Operations</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Manage equipment, track maintenance, and resolve alerts.</p>
      </div>
      {/* Metrics */}
      <div className="flex gap-4">
      <div className="bg-surface-container-high border border-outline-variant rounded p-4 w-40 flex flex-col justify-center shadow-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1">Total Items</span>
      <span className="font-headline-sm text-headline-sm text-on-surface font-mono">1,240</span>
      </div>
      <div className="bg-surface-container-high border border-outline-variant rounded p-4 w-40 flex flex-col justify-center border-l-4 border-l-secondary shadow-sm">
      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mb-1 flex items-center gap-1"><Wrench className="text-[14px] text-secondary" aria-hidden={true} focusable="false" /> Maintenance</span>
      <span className="font-headline-sm text-headline-sm text-on-surface font-mono">18</span>
      </div>
      <div className="bg-error-container border border-error/30 rounded p-4 w-40 flex flex-col justify-center border-l-4 border-l-error shadow-sm">
      <span className="font-label-sm text-label-sm text-on-error-container uppercase tracking-wider mb-1 flex items-center gap-1"><TriangleAlert className="text-[14px] text-error" aria-hidden={true} focusable="false" /> Critical Alerts</span>
      <span className="font-headline-sm text-headline-sm text-on-error-container font-mono">3</span>
      </div>
      </div>
      </section>
      {/* Main Work Area: Table + Preview Panel */}
      <section className="flex flex-1 gap-6 min-h-0 overflow-hidden">
      {/* Table Container */}
      <div className="flex-1 bg-surface-container border border-outline-variant rounded flex flex-col min-w-0 shadow-sm relative">
      {/* Toolbar / Filters */}
      <div className="h-12 border-b border-outline-variant bg-surface-container-low px-4 flex items-center justify-between shrink-0">
      <div className="flex items-center gap-3">
      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
      <ListFilter className="text-sm" aria-hidden={true} focusable="false" /> Filters:
                                  </span>
      <select className="bg-surface-container-highest border border-outline-variant text-on-surface rounded py-1 px-2 font-label-sm text-label-sm h-7 focus:ring-1 focus:ring-primary-container focus:border-primary-container outline-none">
      <option>Status: All</option>
      <option>Active</option>
      <option>Maintenance</option>
      <option>Offline</option>
      </select>
      <select className="bg-surface-container-highest border border-outline-variant text-on-surface rounded py-1 px-2 font-label-sm text-label-sm h-7 focus:ring-1 focus:ring-primary-container focus:border-primary-container outline-none">
      <option>Priority: All</option>
      <option>High</option>
      <option>Medium</option>
      <option>Low</option>
      </select>
      <select className="bg-surface-container-highest border border-outline-variant text-on-surface rounded py-1 px-2 font-label-sm text-label-sm h-7 focus:ring-1 focus:ring-primary-container focus:border-primary-container outline-none">
      <option>Team: Any</option>
      <option>Alpha Techs</option>
      <option>Night Crew</option>
      </select>
      </div>
      <button className="bg-primary-container hover:bg-primary-fixed-variant text-on-primary-container font-label-md text-label-md py-1 px-3 rounded flex items-center gap-2 transition-colors h-8 border border-primary-container" id="ACT_CREATE_RECORD" type="button" data-action-id="create-new-item-4" onClick={actions?.["create-new-item-4"]}>
      <Plus className="text-sm" aria-hidden={true} focusable="false" /> Create New Item
                              </button>
      </div>
      {/* Data Table */}
      <div className="flex-1 overflow-auto">
      <table className="w-full text-left font-body-sm text-body-sm whitespace-nowrap">
      <thead className="sticky top-0 bg-surface-container-high border-b border-outline-variant z-10">
      <tr>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-24">ID</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Item Name</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-32">Status</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-24">Priority</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider w-32">Last Updated</th>
      <th className="px-4 py-2 font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Technician</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant">
      {/* Row 1: Selected / Critical */}
      <tr className="bg-surface-container-highest cursor-pointer hover:bg-surface-bright transition-colors border-l-2 border-l-primary group">
      <td className="px-4 py-3 font-label-md text-label-md text-primary font-mono group-hover:text-primary-fixed">WO-8921</td>
      <td className="px-4 py-3 font-headline-sm text-headline-sm text-on-surface">Conveyor-7B</td>
      <td className="px-4 py-3">
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-error/50 bg-error/10 text-error font-label-sm text-label-sm uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Offline
                                              </span>
      </td>
      <td className="px-4 py-3"><span className="text-error font-bold">Critical</span></td>
      <td className="px-4 py-3 text-on-surface-variant font-mono text-xs">10m ago</td>
      <td className="px-4 py-3 text-on-surface-variant">J. Miller</td>
      </tr>
      {/* Row 2 */}
      <tr className="bg-surface-container cursor-pointer hover:bg-surface-container-highest transition-colors border-l-2 border-l-transparent">
      <td className="px-4 py-3 font-label-md text-label-md text-on-surface-variant font-mono">WO-8920</td>
      <td className="px-4 py-3 font-headline-sm text-headline-sm text-on-surface">Forklift-A2</td>
      <td className="px-4 py-3">
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-secondary/50 bg-secondary/10 text-secondary font-label-sm text-label-sm uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Maintenance
                                              </span>
      </td>
      <td className="px-4 py-3 text-secondary">High</td>
      <td className="px-4 py-3 text-on-surface-variant font-mono text-xs">2h ago</td>
      <td className="px-4 py-3 text-on-surface-variant">S. Chen</td>
      </tr>
      {/* Row 3 */}
      <tr className="bg-surface-container cursor-pointer hover:bg-surface-container-highest transition-colors border-l-2 border-l-transparent">
      <td className="px-4 py-3 font-label-md text-label-md text-on-surface-variant font-mono">WO-8919</td>
      <td className="px-4 py-3 font-headline-sm text-headline-sm text-on-surface">HVAC-Zone4</td>
      <td className="px-4 py-3">
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-tertiary/50 bg-tertiary/10 text-tertiary font-label-sm text-label-sm uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Active
                                              </span>
      </td>
      <td className="px-4 py-3 text-on-surface-variant">Low</td>
      <td className="px-4 py-3 text-on-surface-variant font-mono text-xs">5h ago</td>
      <td className="px-4 py-3 text-on-surface-variant">Unassigned</td>
      </tr>
      {/* Row 4 */}
      <tr className="bg-surface-container cursor-pointer hover:bg-surface-container-highest transition-colors border-l-2 border-l-transparent">
      <td className="px-4 py-3 font-label-md text-label-md text-on-surface-variant font-mono">WO-8918</td>
      <td className="px-4 py-3 font-headline-sm text-headline-sm text-on-surface">Pallet Jack-12</td>
      <td className="px-4 py-3">
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-tertiary/50 bg-tertiary/10 text-tertiary font-label-sm text-label-sm uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> Active
                                              </span>
      </td>
      <td className="px-4 py-3 text-on-surface-variant">Medium</td>
      <td className="px-4 py-3 text-on-surface-variant font-mono text-xs">1d ago</td>
      <td className="px-4 py-3 text-on-surface-variant">T. Davis</td>
      </tr>
      {/* Loading/Empty State Simulation at bottom */}
      <tr className="bg-surface-dim/50 border-t border-outline-variant">
      <td className="px-4 py-8 text-center" colSpan={6}>
      <div className="flex flex-col items-center justify-center gap-3">
      <BadgeHelp className="text-outline text-3xl" aria-hidden={true} focusable="false" />
      <p className="text-on-surface-variant font-body-sm">Connection unstable. Unable to fetch older records.</p>
      <button className="bg-transparent border border-outline-variant text-on-surface hover:bg-surface-container px-4 py-1.5 rounded font-label-md text-label-md transition-colors flex items-center gap-2" id="ACT_RETRY_LOAD" type="button" data-action-id="retry-load-5" onClick={actions?.["retry-load-5"]}>
      <RefreshCw className="text-sm" aria-hidden={true} focusable="false" /> Retry Load
                                                  </button>
      </div>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      </div>
      {/* Selected Item Preview Panel (Side-by-side layout) */}
      <aside className="w-80 bg-surface-container border border-outline-variant rounded flex flex-col min-h-0 shadow-sm shrink-0">
      <div className="p-4 border-b border-outline-variant flex justify-between items-start bg-surface-container-low">
      <div>
      <div className="flex items-center gap-2 mb-1">
      <span className="font-label-sm text-label-sm text-primary font-mono bg-primary/10 px-1 rounded">WO-8921</span>
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded border border-error/50 bg-error/10 text-error font-label-sm text-label-sm uppercase text-[9px]">
      <span className="w-1 h-1 rounded-full bg-error"></span> Offline
                                      </span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Conveyor-7B</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Sector 4, Main Loading Dock</p>
      </div>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors" type="button" data-action-id="close-6" onClick={actions?.["close-6"]}>
      <X aria-hidden={true} focusable="false" />
      </button>
      </div>
      <div className="flex-1 overflow-auto p-4 flex flex-col gap-5">
      {/* Status Alert Card */}
      <div className="bg-error-container/20 border border-error/30 rounded p-3 text-on-surface">
      <h4 className="font-label-sm text-label-sm text-error uppercase tracking-wider mb-1 flex items-center gap-1"><BadgeHelp className="text-sm" aria-hidden={true} focusable="false" /> Error Code: E-499</h4>
      <p className="font-body-sm text-body-sm">Motor thermal overload detected. System halted to prevent damage. Requires manual reset and inspection by certified tech.</p>
      </div>
      {/* Details Grid */}
      <div className="grid grid-cols-2 gap-y-4 gap-x-2">
      <div>
      <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Priority</span>
      <span className="font-body-sm text-body-sm text-error font-bold">Critical</span>
      </div>
      <div>
      <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Assigned To</span>
      <span className="font-body-sm text-body-sm text-on-surface flex items-center gap-2">
      <img alt="Tech Avatar" className="w-4 h-4 rounded-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Is97FPgRx09HznM2hj8WpCJ82RObodAfFj_z9TMrdlOCA-0P37JDKrrQb-0zKa-T2XSatyT-oS1wj0vnjSaO0qE7Z3Bdvqb3yv_gRdQVeV3MdRJL-JBsYdNTR15AYDBpEW6NxPYxY_CinqXP-DMz9HvDm83mX-i66cjQolFxw7Z0g-b1nCQaqI46pw34ByOZgSrxaQtCsxb8OJfnxCg08pi_o_HrpwLa5k_W86cjCOqrJ8zPm-F_9Ug3fPDC21-gDzymjA7EZZQX" /> J. Miller
                                      </span>
      </div>
      <div>
      <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Last PM</span>
      <span className="font-body-sm text-body-sm text-on-surface font-mono text-xs">2023-10-15</span>
      </div>
      <div>
      <span className="block font-label-sm text-label-sm text-on-surface-variant uppercase mb-1">Est. Uptime</span>
      <span className="font-body-sm text-body-sm text-on-surface font-mono text-xs">TBD</span>
      </div>
      </div>
      <hr className="border-outline-variant" />
      {/* Action Buttons */}
      <div className="flex flex-col gap-2 mt-auto">
      <button className="w-full bg-primary-container hover:bg-primary-fixed-variant text-on-primary-container font-label-md text-label-md py-2 px-4 rounded transition-colors text-center border border-primary-container" type="button" data-action-id="dispatch-technician-7" onClick={actions?.["dispatch-technician-7"]}>
                                      Dispatch Technician
                                  </button>
      <button className="w-full bg-transparent border border-outline-variant hover:border-outline text-on-surface font-label-md text-label-md py-2 px-4 rounded transition-colors text-center" type="button" data-action-id="view-full-history-8" onClick={actions?.["view-full-history-8"]}>
                                      View Full History
                                  </button>
      </div>
      </div>
      </aside>
      </section>
      </div>
      </main>
    </>
  );
}
