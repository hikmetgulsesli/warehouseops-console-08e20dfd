// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Insights - WarehouseOps Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowDown, ArrowUp, BadgeHelp, Bell, Boxes, CheckCircle2, CircleHelp, Download, Lightbulb, ListFilter, LogOut, PackageSearch, Play, RefreshCw, Search, Settings, TrendingUp, TriangleAlert, Wrench } from "lucide-react";


export type InsightsWarehouseopsConsoleActionId = "notifications-1" | "help-2" | "logout-3" | "filter-insights-4" | "export-report-5" | "review-queue-6" | "view-all-logs-7" | "item-operations-1" | "queue-and-status-2" | "insights-3" | "settings-4" | "wo-410-5";

export interface InsightsWarehouseopsConsoleProps {
  actions?: Partial<Record<InsightsWarehouseopsConsoleActionId, () => void>>;
}

export function InsightsWarehouseopsConsole({ actions }: InsightsWarehouseopsConsoleProps) {
  return (
    <>
      <div className="flex h-screen w-full">
      {/* Shared Component: SideNavBar */}
      <aside className="w-sidebar-width h-screen sticky top-0 left-0 bg-surface-container-lowest border-r border-outline-variant flex flex-col py-gutter-default z-20 shrink-0 hidden md:flex">
      {/* Header Brand */}
      <div className="px-4 mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-gradient-to-br from-primary to-inverse-primary flex items-center justify-center shrink-0 border border-outline-variant">
      <Boxes  style={{fontVariationSettings: "'FILL' 1"}} className="text-on-primary font-headline-sm" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary tracking-tight">WarehouseOps</h1>
      <p className="font-label-md text-label-md text-on-surface-variant">Console v1.0</p>
      </div>
      </div>
      {/* Navigation Items */}
      <nav className="flex-1 flex flex-col gap-1 font-body-md text-body-md">
      {/* Item Operations (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200" href="#" data-action-id="item-operations-1" onClick={actions?.["item-operations-1"]}>
      <PackageSearch aria-hidden={true} focusable="false" />
                          Item Operations
                      </a>
      {/* Queue & Status (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200" href="#" data-action-id="queue-and-status-2" onClick={actions?.["queue-and-status-2"]}>
      <BadgeHelp aria-hidden={true} focusable="false" />
                          Queue &amp; Status
                      </a>
      {/* Insights (ACTIVE) */}
      <a className="flex items-center gap-3 px-4 py-3 text-primary border-l-4 border-primary bg-surface-container-high" href="#" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-bold">Insights</span>
      </a>
      {/* Settings (Inactive) */}
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200" href="#" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings aria-hidden={true} focusable="false" />
                          Settings
                      </a>
      </nav>
      {/* Bottom Profile Avatar */}
      <div className="px-4 mt-auto">
      <div className="flex items-center gap-3 p-2 rounded hover:bg-surface-container-low cursor-pointer border border-transparent hover:border-outline-variant transition-colors">
      <img alt="User profile" className="w-8 h-8 rounded-full border border-outline-variant object-cover" data-alt="A close up portrait of a male professional with short dark hair, wearing a dark industrial uniform. The lighting is moody and cool-toned, fitting a modern corporate warehouse environment. Deep shadows contrast with subtle blue highlights." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAl2Bvht6aKQgjL0oxAVBU4SsOBlXS7m4Hj6_TeWpZd9UPjMtcXo-FSiZfSgRP8sGWdK9zmSM20KVZcGWG0pCjw9CgAKc9t_v1m8eJby6hpEpKFWzg_w_JTcqDxfVhSBph9RCbpVJYHK6HU5-7-Aa__BVRCHNAX5OkZW_XUUn13i6CnOof16VkjBZV5g2bCRCA4YQjpB4UL52DAktB_6ebkfBHUg8-BGJxL-iZ6a4HSXKYXj_kJ1AiFwkmmhQ8V_EuK1gNOE-aZOyzk" />
      <div className="flex-1 min-w-0">
      <p className="font-label-md text-label-md text-on-surface truncate">E. Miller</p>
      <p className="font-label-sm text-label-sm text-on-surface-variant truncate">Shift Lead</p>
      </div>
      </div>
      </div>
      </aside>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
      {/* Shared Component: TopNavBar */}
      <header className="h-row-height-md w-full sticky top-0 z-10 bg-surface-container border-b border-outline-variant flex justify-between items-center px-container-padding gap-gutter-default shrink-0">
      {/* Search Bar (on_left) */}
      <div className="flex-1 max-w-md flex items-center relative">
      <Search className="absolute left-3 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-dim border border-outline-variant rounded py-1.5 pl-9 pr-3 font-label-md text-label-md text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-outline transition-colors" placeholder="Search operations, assets, or IDs..." type="text" />
      </div>
      {/* Product Name (Center-ish / Right aligned on desktop) */}
      <div className="hidden lg:block font-headline-sm text-headline-sm font-bold text-on-surface mr-auto ml-8">
                          WarehouseOps Console
                      </div>
      {/* Trailing Icon Actions */}
      <div className="flex items-center gap-2">
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors hover:scale-95" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors hover:scale-95" type="button" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="w-px h-5 bg-outline-variant mx-1"></div>
      <button className="w-8 h-8 flex items-center justify-center rounded text-error hover:bg-error/10 transition-colors hover:scale-95" type="button" data-action-id="logout-3" onClick={actions?.["logout-3"]}>
      <LogOut className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Scrollable Canvas */}
      <main className="flex-1 overflow-y-auto p-container-padding bg-background pb-20">
      {/* Page Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
      <h2 className="font-display-sm text-display-sm text-on-surface tracking-tight">Insights Overview</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Real-time domain metrics and operational status signals.</p>
      </div>
      <div className="flex items-center gap-3">
      {/* Filter Context Menu Action */}
      <button className="h-row-height-sm px-3 flex items-center gap-2 border border-outline-variant bg-surface-container-lowest hover:bg-surface-container-low rounded text-on-surface font-label-md text-label-md transition-colors" type="button" data-action-id="filter-insights-4" onClick={actions?.["filter-insights-4"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Filter Insights
                              </button>
      {/* Export Summary Action */}
      <button className="h-row-height-sm px-4 flex items-center gap-2 bg-primary text-on-primary rounded font-label-md text-label-md hover:bg-primary-fixed-dim transition-colors font-semibold shadow-sm" type="button" data-action-id="export-report-5" onClick={actions?.["export-report-5"]}>
      <Download  style={{fontVariationSettings: "'FILL' 1"}} className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Export Report
                              </button>
      </div>
      </div>
      {/* Bento Grid Layout */}
      <div className="grid grid-cols-12 gap-unit-4">
      {/* KPI Card 1: MTTR */}
      <div className="col-span-12 md:col-span-4 bg-surface-container border border-outline-variant rounded p-4 flex flex-col justify-between min-h-[120px] hover:border-primary/50 transition-colors">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Mean Time to Repair</span>
      <Wrench className="text-outline text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end gap-3">
      <span className="font-display-sm text-display-sm text-on-surface font-mono tracking-tighter">4.2h</span>
      <div className="flex items-center gap-1 font-label-md text-label-md text-tertiary bg-tertiary/10 border border-tertiary/30 px-1.5 py-0.5 rounded-sm mb-1">
      <ArrowDown className="text-[14px]" aria-hidden={true} focusable="false" />
      <span>12%</span>
      </div>
      </div>
      </div>
      {/* KPI Card 2: Uptime */}
      <div className="col-span-12 md:col-span-4 bg-surface-container border border-outline-variant rounded p-4 flex flex-col justify-between min-h-[120px] hover:border-primary/50 transition-colors">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">System Uptime</span>
      <BadgeHelp className="text-outline text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end gap-3">
      <span className="font-display-sm text-display-sm text-on-surface font-mono tracking-tighter">98.4%</span>
      <div className="flex items-center gap-1 font-label-md text-label-md text-tertiary bg-tertiary/10 border border-tertiary/30 px-1.5 py-0.5 rounded-sm mb-1">
      <ArrowUp className="text-[14px]" aria-hidden={true} focusable="false" />
      <span>0.2%</span>
      </div>
      </div>
      </div>
      {/* KPI Card 3: Parts Inventory */}
      <div className="col-span-12 md:col-span-4 bg-surface-container border border-outline-variant rounded p-4 flex flex-col justify-between min-h-[120px] relative overflow-hidden group hover:border-error/50 transition-colors">
      <div className="absolute top-0 right-0 w-16 h-16 bg-error/5 rounded-bl-full -z-0"></div>
      <div className="flex justify-between items-start mb-2 relative z-10">
      <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Parts Inventory Low</span>
      <TriangleAlert className="text-error text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex items-end gap-3 relative z-10">
      <span className="font-display-sm text-display-sm text-error font-mono tracking-tighter">12 items</span>
      <div className="flex items-center gap-1 font-label-md text-label-md text-error bg-error/10 border border-error/30 px-1.5 py-0.5 rounded-sm mb-1">
      <TrendingUp className="text-[14px]" aria-hidden={true} focusable="false" />
      <span>Action Req.</span>
      </div>
      </div>
      </div>
      {/* State Distribution Chart */}
      <div className="col-span-12 lg:col-span-8 bg-surface-container border border-outline-variant rounded flex flex-col p-5">
      <div className="flex justify-between items-center mb-6">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">State Distribution</h3>
      <span className="font-label-md text-label-md text-on-surface-variant">Equipment health across zones</span>
      </div>
      {/* Custom Segmented Bar */}
      <div className="w-full h-8 flex rounded overflow-hidden border border-surface-dim mb-4 bg-surface-dim">
      <div className="h-full bg-tertiary flex items-center justify-center font-label-sm text-on-tertiary-fixed" style={{width: "75%"}} title="Operational: 75%">75%</div>
      <div className="h-full bg-secondary flex items-center justify-center font-label-sm text-on-secondary" style={{width: "15%"}} title="Maintenance: 15%">15%</div>
      <div className="h-full bg-error flex items-center justify-center font-label-sm text-on-error" style={{width: "10%"}} title="Critical: 10%">10%</div>
      </div>
      {/* Legend */}
      <div className="flex gap-6 mt-auto">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-tertiary"></div>
      <span className="font-label-md text-label-md text-on-surface-variant">Operational (142)</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-secondary"></div>
      <span className="font-label-md text-label-md text-on-surface-variant">Maintenance (28)</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-error"></div>
      <span className="font-label-md text-label-md text-on-surface-variant">Critical (18)</span>
      </div>
      </div>
      </div>
      {/* Actionable Hints Section */}
      <div className="col-span-12 lg:col-span-4 bg-surface-container border border-secondary/50 rounded flex flex-col relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
      <div className="p-5 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-4">
      <Lightbulb  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary" aria-hidden={true} focusable="false" />
      <h3 className="font-headline-sm text-headline-sm text-secondary">Actionable Hints</h3>
      </div>
      <p className="font-body-md text-body-md text-on-surface mb-4">
      <span className="font-bold text-on-surface">3 Work Orders</span> are nearing SLA breach. Consider re-assigning resources to Zone B to prevent penalties.
                                  </p>
      <button className="mt-auto h-row-height-sm w-full border border-secondary text-secondary hover:bg-secondary/10 rounded font-label-md text-label-md transition-colors" type="button" data-action-id="review-queue-6" onClick={actions?.["review-queue-6"]}>
                                      Review Queue
                                  </button>
      </div>
      </div>
      {/* Recent Activity Feed */}
      <div className="col-span-12 bg-surface-container border border-outline-variant rounded p-5">
      <div className="flex justify-between items-center mb-4 border-b border-outline-variant pb-4">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Recent Activity</h3>
      <button className="font-label-md text-label-md text-primary hover:text-primary-fixed transition-colors" type="button" data-action-id="view-all-logs-7" onClick={actions?.["view-all-logs-7"]}>View All Logs</button>
      </div>
      <div className="flex flex-col gap-2">
      {/* Log Item 1 */}
      <div className="flex items-start gap-4 p-2 rounded hover:bg-surface-container-high transition-colors">
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 border border-primary/20">
      <Play className="text-primary text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 min-w-0 pt-1">
      <p className="font-body-sm text-body-sm text-on-surface">
                                              Technician Miller started <a className="text-primary hover:underline font-mono" href="#" data-action-id="wo-410-5" onClick={actions?.["wo-410-5"]}>#WO-410</a>
      </p>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">2 mins ago · Zone C</p>
      </div>
      </div>
      {/* Log Item 2 */}
      <div className="flex items-start gap-4 p-2 rounded hover:bg-surface-container-high transition-colors">
      <div className="w-8 h-8 rounded-full bg-tertiary/10 flex items-center justify-center shrink-0 border border-tertiary/20">
      <CheckCircle2 className="text-tertiary text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 min-w-0 pt-1">
      <p className="font-body-sm text-body-sm text-on-surface">
                                              Conveyor-A1 marked <span className="inline-flex items-center px-1.5 py-0.5 rounded-sm bg-tertiary/10 border border-tertiary/30 text-tertiary font-label-md text-label-sm">Operational</span>
      </p>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">14 mins ago · Main Hub</p>
      </div>
      </div>
      {/* Log Item 3 */}
      <div className="flex items-start gap-4 p-2 rounded hover:bg-surface-container-high transition-colors">
      <div className="w-8 h-8 rounded-full bg-surface-dim flex items-center justify-center shrink-0 border border-outline-variant">
      <RefreshCw className="text-outline text-[16px]" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 min-w-0 pt-1">
      <p className="font-body-sm text-body-sm text-on-surface">
                                              Automated nightly sync completed successfully.
                                          </p>
      <p className="font-label-sm text-label-sm text-on-surface-variant mt-0.5">4 hours ago · System</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
      </div>
    </>
  );
}
