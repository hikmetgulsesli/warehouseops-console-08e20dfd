// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Item Editor - WarehouseOps Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { ArrowLeft, BadgeHelp, Bell, ChevronDown, CircleAlert, CircleHelp, LogOut, PackageSearch, Save, Search, Settings, TriangleAlert, X } from "lucide-react";


export type ItemEditorWarehouseopsConsoleActionId = "notifications-1" | "help-2" | "logout-3" | "cancel-4" | "save-changes-5" | "item-operations-1" | "queue-and-status-2" | "insights-3" | "settings-4" | "back-to-list-5";

export interface ItemEditorWarehouseopsConsoleProps {
  actions?: Partial<Record<ItemEditorWarehouseopsConsoleActionId, () => void>>;
}

export function ItemEditorWarehouseopsConsole({ actions }: ItemEditorWarehouseopsConsoleProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="w-sidebar-width h-screen sticky top-0 left-0 border-r border-outline-variant bg-surface-container-lowest flex flex-col py-gutter-default flex-shrink-0 z-20">
      {/* Brand Header */}
      <div className="px-container-padding mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded-DEFAULT bg-primary-container flex items-center justify-center flex-shrink-0 border border-outline-variant">
      <BadgeHelp className="text-on-primary-container text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary">WarehouseOps</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Console v1.0</p>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col">
      {/* Active Tab: Item Operations */}
      <a className="flex items-center gap-3 px-4 py-3 text-primary border-l-4 border-primary bg-surface-container-high transition-colors duration-200" href="#" data-action-id="item-operations-1" onClick={actions?.["item-operations-1"]}>
      <PackageSearch className="icon-fill" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Item Operations</span>
      </a>
      {/* Inactive Tabs */}
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 border-l-4 border-transparent" href="#" data-action-id="queue-and-status-2" onClick={actions?.["queue-and-status-2"]}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queue &amp; Status</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 border-l-4 border-transparent" href="#" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:bg-surface-container-low transition-colors duration-200 border-l-4 border-transparent" href="#" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </div>
      {/* User Avatar / Footer */}
      <div className="px-4 mt-auto">
      <div className="flex items-center gap-3 p-3 border border-outline-variant rounded-DEFAULT bg-surface-container-low">
      <img alt="User profile" className="w-8 h-8 rounded-DEFAULT border border-outline-variant" data-alt="A small, square user profile avatar placeholder with a dark blue background and light letters, simulating a generic user logged into an industrial system." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6w1tKtt_CIfHtK2h2LOsJVoQZkNRrmP6EPHKlMzYHWmlC0wny551y5n-2CGYY6Z1osm0RTmRe0JrbUxiR9i8PaudOxsg8UZs8O5pVUfMDfLB2JYJcgdIN60JUKe1jLdQ4za1rjuRq6jAVCd3n43YRbaeVJ8giCtB6rkR915NqJaXIPN_s_gzGO7O2JZK8XiWjYTZCXqwiNpaPNLju4wjSoEzKjlxoqtkcVZujPIt8qmWvck3nPzmHhLHCuyaFab9spARPJ_SdH6aa" />
      <div className="flex flex-col">
      <span className="font-label-md text-label-md text-on-surface">Tech. Admin</span>
      <span className="font-label-sm text-label-sm text-on-surface-variant">Shift A</span>
      </div>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
      {/* TopNavBar */}
      <header className="h-row-height-md w-full sticky top-0 z-10 flex justify-between items-center px-container-padding gap-gutter-default border-b border-outline-variant bg-surface-container flex-shrink-0">
      {/* Search */}
      <div className="relative w-64">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]" aria-hidden={true} focusable="false" />
      <input className="w-full h-8 pl-9 pr-3 bg-surface-dim border border-outline-variant rounded-DEFAULT text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder-on-surface-variant transition-colors" placeholder="Search system..." type="text" />
      </div>
      {/* Context Title (Optional, mapping to product_name if needed, but per instructions brand is on side, so we leave it empty or show path) */}
      <div className="flex-1 flex justify-center">
      <span className="font-label-md text-label-md text-on-surface-variant hidden md:block">Item Operations / Editor</span>
      </div>
      {/* Actions */}
      <div className="flex items-center gap-2">
      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-DEFAULT transition-colors" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-DEFAULT transition-colors" type="button" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="w-[1px] h-4 bg-outline-variant mx-1"></div>
      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low rounded-DEFAULT transition-colors" type="button" data-action-id="logout-3" onClick={actions?.["logout-3"]}>
      <LogOut className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Canvas */}
      <main className="flex-1 overflow-y-auto p-container-padding">
      <div className="max-w-4xl mx-auto flex flex-col gap-gutter-default">
      {/* Page Header */}
      <div className="flex justify-between items-end border-b border-outline-variant pb-4">
      <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
      <a className="text-on-surface-variant hover:text-primary transition-colors flex items-center" href="#" data-action-id="back-to-list-5" onClick={actions?.["back-to-list-5"]}>
      <ArrowLeft className="text-[16px]" aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md ml-1">Back to List</span>
      </a>
      </div>
      <h2 className="font-display-sm text-display-sm text-on-surface flex items-center gap-3">
                                  Editing: Forklift-04
                                  <span className="inline-flex items-center px-2 py-0.5 rounded-DEFAULT border border-secondary text-secondary bg-secondary/10 font-label-sm text-label-sm uppercase tracking-wider">
                                      Draft
                                  </span>
      </h2>
      </div>
      </div>
      {/* Form Container */}
      <form className="bg-surface-container border border-outline-variant rounded-DEFAULT flex flex-col">
      {/* Form Body */}
      <div className="p-container-padding flex flex-col gap-6">
      {/* Row 1: ID & Name */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-default">
      {/* Item ID (Read-only) */}
      <div className="flex flex-col gap-2">
      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="itemId">Item ID</label>
      <input className="h-10 bg-surface-container-lowest border border-outline-variant text-on-surface-variant font-label-md text-label-md rounded-DEFAULT cursor-not-allowed opacity-70 px-3" disabled={true} id="itemId" readOnly={true} type="text" value="EQ-FL-04-A" />
      </div>
      {/* Display Name (Required & Error State) */}
      <div className="flex flex-col gap-2">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="displayName">
                                          Display Name <span className="text-error">*</span>
      </label>
      <div className="relative">
      <input className="w-full h-10 bg-surface-dim border border-error text-on-surface font-body-md text-body-md rounded-DEFAULT px-3 focus:outline-none focus:border-error focus:ring-2 focus:ring-error focus:ring-opacity-50 transition-colors pr-10" id="displayName" placeholder="e.g. Primary Loading Forklift" type="text" defaultValue="" />
      <CircleAlert className="absolute right-3 top-1/2 -translate-y-1/2 text-error text-[18px] pointer-events-none" aria-hidden={true} focusable="false" />
      </div>
      <p className="font-label-sm text-label-sm text-error flex items-center gap-1">
      <TriangleAlert className="text-[14px]" aria-hidden={true} focusable="false" />
                                          Name is required
                                      </p>
      </div>
      </div>
      {/* Row 2: Type & Technician */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-default">
      {/* Maintenance Type (Dropdown) */}
      <div className="flex flex-col gap-2">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="maintType">
                                          Maintenance Type <span className="text-primary">*</span>
      </label>
      <div className="relative">
      <select className="w-full h-10 bg-surface-dim border border-outline-variant text-on-surface font-body-md text-body-md rounded-DEFAULT px-3 appearance-none focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors cursor-pointer" id="maintType">
      <option disabled={true} selected={true} value="">Select type...</option>
      <option value="routine">Routine Inspection</option>
      <option value="repair">Corrective Repair</option>
      <option value="overhaul">Major Overhaul</option>
      </select>
      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]" aria-hidden={true} focusable="false" />
      </div>
      </div>
      {/* Assigned Technician */}
      <div className="flex flex-col gap-2">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="techSelect">Assigned Technician</label>
      <div className="relative flex items-center">
      <BadgeHelp className="absolute left-3 text-on-surface-variant text-[18px] pointer-events-none" aria-hidden={true} focusable="false" />
      <input className="w-full h-10 bg-surface-dim border border-outline-variant text-on-surface font-body-md text-body-md rounded-DEFAULT pl-10 pr-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors" id="techSelect" placeholder="Search technician..." type="text" />
      </div>
      </div>
      </div>
      {/* Row 3: Priority (Radio Group) */}
      <div className="flex flex-col gap-2 border border-outline-variant rounded-DEFAULT p-4 bg-surface-dim">
      <label className="font-label-md text-label-md text-on-surface mb-1">
                                      Priority Level <span className="text-primary">*</span>
      </label>
      <div className="flex flex-col sm:flex-row gap-4">
      <label className="flex items-center gap-2 cursor-pointer group">
      <input className="w-4 h-4 text-primary bg-surface-container border-outline-variant focus:ring-primary focus:ring-offset-surface-dim" name="priority" type="radio" defaultValue="low" />
      <span className="font-body-sm text-body-sm text-on-surface-variant group-hover:text-on-surface transition-colors">Low (Routine)</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer group">
      <input defaultChecked={true} className="w-4 h-4 text-primary bg-surface-container border-outline-variant focus:ring-primary focus:ring-offset-surface-dim" name="priority" type="radio" defaultValue="medium" />
      <span className="font-body-sm text-body-sm text-on-surface group-hover:text-primary transition-colors">Medium (Standard)</span>
      </label>
      <label className="flex items-center gap-2 cursor-pointer group">
      <input className="w-4 h-4 text-error bg-surface-container border-error focus:ring-error focus:ring-offset-surface-dim" name="priority" type="radio" defaultValue="high" />
      <span className="font-body-sm text-body-sm text-error font-medium">High (Urgent)</span>
      </label>
      </div>
      </div>
      {/* Row 4: Description */}
      <div className="flex flex-col gap-2">
      <label className="font-label-md text-label-md text-on-surface" htmlFor="description">Work Order Description</label>
      <textarea className="w-full bg-surface-dim border border-outline-variant text-on-surface font-body-md text-body-md rounded-DEFAULT p-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary focus:ring-opacity-50 transition-colors resize-y" id="description" placeholder="Detail the maintenance requirements..." rows={4}></textarea>
      <div className="flex justify-end">
      <span className="font-label-sm text-label-sm text-on-surface-variant">0 / 500 chars</span>
      </div>
      </div>
      </div>
      {/* Form Footer / Controls */}
      <div className="p-4 border-t border-outline-variant bg-surface-container-low flex justify-end gap-3 rounded-b-DEFAULT">
      <button className="h-row-height-sm px-4 font-label-md text-label-md text-on-surface border border-outline-variant rounded-DEFAULT hover:bg-surface-variant transition-colors flex items-center justify-center gap-2" type="button" data-action-id="cancel-4" onClick={actions?.["cancel-4"]}>
      <X className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Cancel
                              </button>
      <button className="h-row-height-sm px-6 font-label-md text-label-md text-on-primary bg-primary rounded-DEFAULT hover:bg-primary-fixed transition-colors flex items-center justify-center gap-2 shadow-sm" type="submit" data-action-id="save-changes-5" onClick={actions?.["save-changes-5"]}>
      <Save className="text-[16px]" aria-hidden={true} focusable="false" />
                                  Save Changes
                              </button>
      </div>
      </form>
      </div>
      </main>
      </div>
    </>
  );
}
