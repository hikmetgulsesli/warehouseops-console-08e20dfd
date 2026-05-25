// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Queue and Status Management - WarehouseOps Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowUpDown, BadgeAlert, BadgeHelp, Bell, CalendarDays, CircleHelp, Clock, Ellipsis, Kanban, ListFilter, PackageSearch, Plus, Search, Settings, Timer } from "lucide-react";


export type QueueAndStatusManagementWarehouseopsConsoleActionId = "notifications-1" | "help-2" | "jd-3" | "filter-4" | "sort-5" | "new-work-order-6" | "more-horiz-7" | "update-8" | "item-operations-1" | "queue-and-status-2" | "insights-3" | "settings-4";

export interface QueueAndStatusManagementWarehouseopsConsoleProps {
  actions?: Partial<Record<QueueAndStatusManagementWarehouseopsConsoleActionId, () => void>>;
}

export function QueueAndStatusManagementWarehouseopsConsole({ actions }: QueueAndStatusManagementWarehouseopsConsoleProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="w-sidebar-width h-screen sticky top-0 left-0 bg-surface-container-lowest dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline-variant flex flex-col py-gutter-default z-20">
      {/* Brand */}
      <div className="px-container-padding mb-8">
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary tracking-tight">WarehouseOps</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-widest mt-1">Console v1.0</p>
      </div>
      {/* Nav Items */}
      <div className="flex flex-col h-full font-body-md text-body-md">
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-200" href="#" data-action-id="item-operations-1" onClick={actions?.["item-operations-1"]}>
      <PackageSearch aria-hidden={true} focusable="false" />
                      Item Operations
                  </a>
      {/* ACTIVE TAB: Queue & Status */}
      <a className="flex items-center gap-3 px-4 py-3 text-primary dark:text-primary border-l-4 border-primary bg-surface-container-high dark:bg-surface-container-high transition-colors duration-200" href="#" data-action-id="queue-and-status-2" onClick={actions?.["queue-and-status-2"]}>
      <BadgeHelp  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                      Queue &amp; Status
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-200" href="#" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <BadgeHelp aria-hidden={true} focusable="false" />
                      Insights
                  </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-200 mt-auto" href="#" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings aria-hidden={true} focusable="false" />
                      Settings
                  </a>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-screen min-w-0 bg-background overflow-hidden relative z-0">
      {/* TopNavBar */}
      <header className="h-row-height-md w-full sticky top-0 z-10 bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant flex justify-between items-center px-container-padding gap-gutter-default font-label-md text-label-md">
      {/* Search */}
      <div className="flex-1 max-w-md relative group">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-dim border border-outline-variant rounded pl-10 pr-4 py-1.5 text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors text-body-sm font-body-sm placeholder:text-on-surface-variant/50" placeholder="Search Work Orders, IDs, Items..." type="text" />
      <div className="absolute right-2 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center gap-1">
      <span className="bg-surface-container-high px-1.5 py-0.5 rounded text-[10px] text-on-surface-variant border border-outline-variant">Ctrl</span>
      <span className="bg-surface-container-high px-1.5 py-0.5 rounded text-[10px] text-on-surface-variant border border-outline-variant">K</span>
      </div>
      </div>
      {/* Context Title */}
      <div className="hidden lg:block font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-surface">
                      WarehouseOps Console
                  </div>
      {/* Trailing Actions */}
      <div className="flex items-center gap-4 text-on-surface-variant dark:text-on-surface-variant">
      <button className="hover:text-on-surface dark:hover:text-on-surface transition-colors relative" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      <span className="absolute top-0 right-0 w-2 h-2 bg-error rounded-full border border-surface-container"></span>
      </button>
      <button className="hover:text-on-surface dark:hover:text-on-surface transition-colors" type="button" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="h-4 w-px bg-outline-variant mx-1"></div>
      <button className="hover:text-on-surface dark:hover:text-on-surface transition-colors flex items-center gap-2" type="button" data-action-id="jd-3" onClick={actions?.["jd-3"]}>
      <div className="w-6 h-6 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-sm font-bold border border-primary-fixed">JD</div>
      </button>
      </div>
      </header>
      {/* Kanban Board Area */}
      <div className="flex-1 flex flex-col min-h-0">
      {/* Board Controls */}
      <div className="px-container-padding py-4 flex flex-wrap justify-between items-center gap-4 border-b border-outline-variant bg-background">
      <div className="flex items-center gap-4">
      <h2 className="font-headline-sm text-headline-sm font-bold text-on-surface flex items-center gap-2">
      <Kanban className="text-primary" aria-hidden={true} focusable="false" />
                              Active Operations
                          </h2>
      <div className="h-5 w-px bg-outline-variant"></div>
      <div className="flex items-center gap-2 font-label-md text-label-md">
      <button className="px-3 py-1.5 rounded border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-colors flex items-center gap-1 text-on-surface" type="button" data-action-id="filter-4" onClick={actions?.["filter-4"]}>
      <ListFilter className="text-[16px]" aria-hidden={true} focusable="false" /> Filter
                              </button>
      <button className="px-3 py-1.5 rounded border border-outline-variant bg-surface-container hover:bg-surface-container-high transition-colors flex items-center gap-1 text-on-surface" type="button" data-action-id="sort-5" onClick={actions?.["sort-5"]}>
      <ArrowUpDown className="text-[16px]" aria-hidden={true} focusable="false" /> Sort
                              </button>
      </div>
      </div>
      <button className="px-4 py-1.5 rounded bg-primary text-on-primary font-label-md text-label-md font-bold hover:bg-primary-fixed transition-colors flex items-center gap-2 shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]" type="button" data-action-id="new-work-order-6" onClick={actions?.["new-work-order-6"]}>
      <Plus className="text-[18px]" aria-hidden={true} focusable="false" /> New Work Order
                      </button>
      </div>
      {/* Kanban Scrollable Container */}
      <div className="flex-1 overflow-x-auto overflow-y-hidden p-container-padding flex gap-6 items-start h-full">
      {/* Lane: Backlog */}
      <div className="flex flex-col min-w-[320px] w-[320px] max-h-full bg-surface-container-low rounded border border-outline-variant flex-shrink-0">
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container rounded-t">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-outline"></div>
      <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold">Backlog</span>
      </div>
      <span className="bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm border border-outline-variant">3</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
      {/* Card: Low Priority */}
      <div className="bg-surface border border-outline-variant rounded p-3 hover:border-primary/50 hover:bg-surface-container transition-colors cursor-grab active:cursor-grabbing group">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">#WO-512</span>
      <span className="px-1.5 py-0.5 border border-outline-variant bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded-[2px]">Low</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface font-medium leading-tight mb-3">Conduct monthly inventory audit Aisle 12</h4>
      <div className="flex justify-between items-center mt-auto border-t border-outline-variant pt-2">
      <div className="flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
      <CalendarDays className="text-[14px]" aria-hidden={true} focusable="false" /> Due in 3d
                                      </div>
      <div className="flex items-center gap-2">
      <button className="text-on-surface-variant hover:text-primary transition-colors opacity-0 group-hover:opacity-100" type="button" data-action-id="more-horiz-7" onClick={actions?.["more-horiz-7"]}><Ellipsis className="text-[16px]" aria-hidden={true} focusable="false" /></button>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Lane: Assigned */}
      <div className="flex flex-col min-w-[320px] w-[320px] max-h-full bg-surface-container-low rounded border border-outline-variant flex-shrink-0">
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container rounded-t">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-secondary"></div>
      <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold">Assigned</span>
      </div>
      <span className="bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm border border-outline-variant">2</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
      {/* Card: Medium Priority, Due soon */}
      <div className="bg-surface border border-outline-variant rounded p-3 hover:border-primary/50 hover:bg-surface-container transition-colors cursor-grab active:cursor-grabbing group">
      <div className="flex justify-between items-start mb-2">
      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">#WO-498</span>
      <span className="px-1.5 py-0.5 border border-secondary/50 bg-secondary-container/20 text-secondary font-label-sm text-label-sm rounded-[2px]">Medium</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface font-medium leading-tight mb-3">Retrieve pallet 88-X from upper storage</h4>
      <div className="flex justify-between items-center mt-auto border-t border-outline-variant pt-2">
      <div className="flex items-center gap-1 text-secondary font-label-sm text-label-sm">
      <Clock className="text-[14px]" aria-hidden={true} focusable="false" /> Due in 2h
                                      </div>
      <div className="flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-tertiary-container text-on-tertiary-container flex items-center justify-center font-label-sm text-[9px] border border-tertiary-fixed">MS</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Lane: In Progress */}
      <div className="flex flex-col min-w-[320px] w-[320px] max-h-full bg-surface-container-low rounded border border-outline-variant flex-shrink-0 border-t-2 border-t-primary">
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container rounded-t">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
      <span className="font-label-md text-label-md text-primary uppercase tracking-wider font-bold">In Progress</span>
      </div>
      <span className="bg-primary/20 px-2 py-0.5 rounded text-primary font-label-sm text-label-sm border border-primary/30">4</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
      {/* Card: Critical Priority, Blocked */}
      <div className="bg-surface border-l-2 border-error border-y border-r border-outline-variant rounded p-3 hover:bg-surface-container transition-colors cursor-grab group relative">
      <div className="absolute -left-1.5 -top-1.5 w-4 h-4 bg-error rounded-full flex items-center justify-center shadow-sm">
      <BadgeAlert  style={{fontVariationSettings: "'FILL' 1"}} className="text-[10px] text-on-error font-bold" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex justify-between items-start mb-2 pl-2">
      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">#WO-402</span>
      <span className="px-1.5 py-0.5 border border-error bg-error-container/20 text-error font-label-sm text-label-sm rounded-[2px] font-bold">Critical</span>
      </div>
      <h4 className="font-body-md text-body-md text-on-surface font-medium leading-tight mb-2 pl-2">Emergency restock: Aisle 4B Racking collapsed section</h4>
      {/* Blocker Alert */}
      <div className="mb-3 pl-2">
      <div className="bg-error-container/10 border border-error/30 rounded px-2 py-1 flex items-center gap-2">
      <BadgeHelp className="text-error text-[14px]" aria-hidden={true} focusable="false" />
      <span className="font-label-sm text-[10px] text-error uppercase tracking-wider">Blocked: Forklift Maintenace</span>
      </div>
      </div>
      <div className="flex justify-between items-center mt-auto border-t border-outline-variant pt-2 pl-2">
      <div className="flex items-center gap-1 text-error font-label-sm text-label-sm font-bold">
      <Timer className="text-[14px]" aria-hidden={true} focusable="false" /> Overdue 45m
                                      </div>
      <div className="flex items-center gap-2">
      <div className="w-5 h-5 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center font-label-sm text-[9px] border border-primary-fixed">JD</div>
      <button className="bg-surface-container-high hover:bg-primary hover:text-on-primary text-on-surface border border-outline-variant rounded px-2 py-0.5 font-label-sm text-[10px] transition-colors" type="button" data-action-id="update-8" onClick={actions?.["update-8"]}>Update</button>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Lane: Testing/Review */}
      <div className="flex flex-col min-w-[320px] w-[320px] max-h-full bg-surface-container-low rounded border border-outline-variant flex-shrink-0">
      <div className="p-3 border-b border-outline-variant flex justify-between items-center bg-surface-container rounded-t">
      <div className="flex items-center gap-2">
      <div className="w-2 h-2 rounded-full bg-tertiary"></div>
      <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider font-bold">Testing/Review</span>
      </div>
      <span className="bg-surface-container-high px-2 py-0.5 rounded text-on-surface-variant font-label-sm text-label-sm border border-outline-variant">1</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
      {/* Placeholder for empty state visualization */}
      <div className="h-full flex flex-col items-center justify-center text-center p-4 border-2 border-dashed border-outline-variant/50 rounded opacity-50">
      <BadgeHelp className="text-outline text-[32px] mb-2" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-outline">Drop items here for QA</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
