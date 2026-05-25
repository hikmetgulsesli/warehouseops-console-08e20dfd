// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings and Preferences - WarehouseOps Console
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { BadgeHelp, Bell, BellRing, Boxes, CheckCircle2, ChevronDown, CircleHelp, LogOut, Monitor, PackageSearch, Pencil, RefreshCw, Save, Search, Settings, Trash2, User } from "lucide-react";


export type SettingsAndPreferencesWarehouseopsConsoleActionId = "notifications-1" | "help-2" | "logout-3" | "enable-high-density-mode-4" | "edit-5" | "delete-6" | "edit-7" | "delete-8" | "edit-9" | "delete-10" | "reset-to-defaults-11" | "save-preferences-12" | "item-operations-1" | "queue-and-status-2" | "insights-3" | "settings-4";

export interface SettingsAndPreferencesWarehouseopsConsoleProps {
  actions?: Partial<Record<SettingsAndPreferencesWarehouseopsConsoleActionId, () => void>>;
}

export function SettingsAndPreferencesWarehouseopsConsole({ actions }: SettingsAndPreferencesWarehouseopsConsoleProps) {
  return (
    <>
      {/* Shared Component: SideNavBar */}
      <nav className="w-sidebar-width h-screen sticky top-0 left-0 bg-surface-container-lowest dark:bg-surface-container-lowest border-r border-outline-variant dark:border-outline-variant flex flex-col py-gutter-default flex-shrink-0 z-20">
      {/* Brand Header */}
      <div className="px-4 mb-8 flex items-center gap-3">
      <div className="w-8 h-8 rounded bg-primary-container flex items-center justify-center flex-shrink-0 border border-outline-variant">
      <Boxes  style={{fontVariationSettings: "'FILL' 1"}} className="text-on-primary-container" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <h1 className="font-headline-sm text-headline-sm font-bold text-primary dark:text-primary leading-tight">WarehouseOps</h1>
      <p className="font-label-sm text-label-sm text-on-surface-variant">Console v1.0</p>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex-1 flex flex-col gap-1">
      {/* Inactive Item */}
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-200" href="#" data-action-id="item-operations-1" onClick={actions?.["item-operations-1"]}>
      <PackageSearch aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Item Operations</span>
      </a>
      {/* Inactive Item */}
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-200" href="#" data-action-id="queue-and-status-2" onClick={actions?.["queue-and-status-2"]}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Queue &amp; Status</span>
      </a>
      {/* Inactive Item */}
      <a className="flex items-center gap-3 px-4 py-3 text-on-surface-variant dark:text-on-surface-variant hover:bg-surface-container-low dark:hover:bg-surface-container-low transition-colors duration-200" href="#" data-action-id="insights-3" onClick={actions?.["insights-3"]}>
      <BadgeHelp aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      {/* Active Item (Semantic Match to Settings) */}
      <a className="flex items-center gap-3 px-4 py-3 text-primary dark:text-primary border-l-4 border-primary bg-surface-container-high dark:bg-surface-container-high transition-colors duration-200" href="#" data-action-id="settings-4" onClick={actions?.["settings-4"]}>
      <Settings style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </div>
      {/* User Profile Stub */}
      <div className="px-4 mt-auto">
      <div className="flex items-center gap-3 pt-4 border-t border-outline-variant">
      <div className="w-8 h-8 rounded-full bg-surface-variant border border-outline flex items-center justify-center overflow-hidden">
      <User className="text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      </div>
      <div className="flex-1 min-w-0">
      <p className="font-label-md text-label-md truncate">Operator ID: 8492</p>
      </div>
      </div>
      </div>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-surface">
      {/* Shared Component: TopNavBar */}
      <header className="h-row-height-md w-full sticky top-0 z-10 bg-surface-container dark:bg-surface-container border-b border-outline-variant dark:border-outline-variant flex justify-between items-center px-container-padding gap-gutter-default flex-shrink-0">
      {/* Left: Search/Context */}
      <div className="flex-1 flex items-center">
      <div className="relative w-64">
      <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm" aria-hidden={true} focusable="false" />
      <input className="w-full bg-surface-container-lowest border border-outline-variant rounded font-label-md text-label-md text-on-surface py-1 pl-8 pr-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary placeholder:text-on-surface-variant/50 transition-colors" placeholder="Search parameters..." type="text" />
      </div>
      </div>
      {/* Center: Product Context (Optional but good for anchor) */}
      <div className="hidden lg:flex items-center">
      <span className="font-headline-sm text-headline-sm font-bold text-on-surface dark:text-on-surface">WarehouseOps Console</span>
      </div>
      {/* Right: Actions */}
      <div className="flex-1 flex justify-end items-center gap-2">
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors active:scale-95 duration-150" type="button" data-action-id="notifications-1" onClick={actions?.["notifications-1"]}>
      <Bell className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors active:scale-95 duration-150" type="button" data-action-id="help-2" onClick={actions?.["help-2"]}>
      <CircleHelp className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      <div className="w-px h-4 bg-outline-variant mx-2"></div>
      <button className="w-8 h-8 flex items-center justify-center rounded text-error hover:bg-error/10 transition-colors active:scale-95 duration-150" title="Logout" type="button" data-action-id="logout-3" onClick={actions?.["logout-3"]}>
      <LogOut className="text-[20px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Scrollable Settings Canvas */}
      <main className="flex-1 overflow-y-auto p-container-padding">
      <div className="max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="mb-8 border-b border-outline-variant pb-4">
      <h2 className="font-display-sm text-display-sm text-on-surface">Settings &amp; Preferences</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Configure workflow defaults and notification thresholds.</p>
      </div>
      <form className="space-y-8" id="settings-form">
      {/* Section: Workspace Preferences */}
      <section className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
      <Monitor className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
                                      Workspace Preferences
                                  </h3>
      </div>
      <div className="p-6 space-y-6">
      {/* Toggle Control */}
      <div className="flex items-center justify-between">
      <div>
      <label className="font-label-md text-label-md text-on-surface block mb-1">High Density Mode</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Reduces padding in data tables to display maximum rows.</p>
      </div>
      <button aria-checked={false} className="relative inline-flex h-6 w-11 items-center rounded-full bg-surface-container-highest border border-outline-variant transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface" id="density-toggle" role="switch" type="button" data-action-id="enable-high-density-mode-4" onClick={actions?.["enable-high-density-mode-4"]}>
      <span className="sr-only">Enable high density mode</span>
      <span className="inline-block h-4 w-4 transform rounded-full bg-on-surface-variant transition-transform translate-x-1" id="density-knob"></span>
      </button>
      </div>
      <div className="h-px bg-outline-variant/50 w-full"></div>
      {/* Select Control */}
      <div className="max-w-xs">
      <label className="font-label-md text-label-md text-on-surface block mb-2" htmlFor="landing-view">Default Landing View</label>
      <div className="relative">
      <select className="w-full appearance-none bg-surface border border-outline-variant rounded font-body-md text-body-md text-on-surface py-2 pl-3 pr-10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary" id="landing-view">
      <option value="operations">Item Operations</option>
      <option selected={true} value="queue">Queue &amp; Status</option>
      <option value="insights">Insights Dashboard</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-on-surface-variant">
      <ChevronDown className="text-sm" aria-hidden={true} focusable="false" />
      </div>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">The initial screen loaded upon authentication.</p>
      </div>
      </div>
      </section>
      {/* Section: Saved Filters */}
      <section className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low flex justify-between items-center">
      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
      <BadgeHelp className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
                                      Saved Filters
                                  </h3>
      <span className="font-label-sm text-label-sm bg-surface-variant border border-outline-variant px-2 py-0.5 rounded text-on-surface-variant">3 Active</span>
      </div>
      <div className="p-6">
      <div className="border border-outline-variant rounded bg-surface overflow-hidden">
      {/* List Header (simulating table head) */}
      <div className="flex items-center px-4 py-2 border-b border-outline-variant bg-surface-container-lowest font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
      <div className="flex-1">Filter Name</div>
      <div className="w-32">Context</div>
      <div className="w-24 text-right">Actions</div>
      </div>
      {/* List Items */}
      <div className="divide-y divide-outline-variant">
      <div className="flex items-center justify-between px-4 py-3 hover:bg-surface-container-lowest transition-colors group">
      <div className="flex-1 font-body-md text-on-surface font-medium">Critical Depletion (Zone A)</div>
      <div className="w-32 font-label-md text-on-surface-variant">Item Ops</div>
      <div className="w-24 flex justify-end gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="Edit" type="button" data-action-id="edit-5" onClick={actions?.["edit-5"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-error transition-colors p-1" title="Delete" type="button" data-action-id="delete-6" onClick={actions?.["delete-6"]}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3 hover:bg-surface-container-lowest transition-colors group">
      <div className="flex-1 font-body-md text-on-surface font-medium">Stalled Technician Queue</div>
      <div className="w-32 font-label-md text-on-surface-variant">Queue</div>
      <div className="w-24 flex justify-end gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="Edit" type="button" data-action-id="edit-7" onClick={actions?.["edit-7"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-error transition-colors p-1" title="Delete" type="button" data-action-id="delete-8" onClick={actions?.["delete-8"]}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      <div className="flex items-center justify-between px-4 py-3 hover:bg-surface-container-lowest transition-colors group">
      <div className="flex-1 font-body-md text-on-surface font-medium">High Value Items (&gt; $5k)</div>
      <div className="w-32 font-label-md text-on-surface-variant">Item Ops</div>
      <div className="w-24 flex justify-end gap-2 opacity-70 group-hover:opacity-100 transition-opacity">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="Edit" type="button" data-action-id="edit-9" onClick={actions?.["edit-9"]}>
      <Pencil className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      <button className="text-on-surface-variant hover:text-error transition-colors p-1" title="Delete" type="button" data-action-id="delete-10" onClick={actions?.["delete-10"]}>
      <Trash2 className="text-[18px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      {/* Section: Notifications */}
      <section className="bg-surface-container border border-outline-variant rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-outline-variant bg-surface-container-low">
      <h3 className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2">
      <BellRing className="text-primary text-[20px]" aria-hidden={true} focusable="false" />
                                      Event Notifications
                                  </h3>
      </div>
      <div className="p-6 space-y-4">
      {/* Checkbox Item */}
      <label className="flex items-start gap-3 cursor-pointer group p-2 -ml-2 rounded hover:bg-surface-container-highest transition-colors">
      <div className="pt-0.5">
      <input defaultChecked={true} className="industrial-checkbox" type="checkbox" />
      </div>
      <div>
      <span className="font-label-md text-label-md text-on-surface block mb-0.5 group-hover:text-primary transition-colors">Critical Alerts</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant block">System failures, safety incidents, or immediate blockers.</span>
      </div>
      </label>
      {/* Checkbox Item */}
      <label className="flex items-start gap-3 cursor-pointer group p-2 -ml-2 rounded hover:bg-surface-container-highest transition-colors">
      <div className="pt-0.5">
      <input defaultChecked={true} className="industrial-checkbox" type="checkbox" />
      </div>
      <div>
      <span className="font-label-md text-label-md text-on-surface block mb-0.5 group-hover:text-primary transition-colors">SLA Breaches</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant block">Tasks exceeding allotted operational timeframes.</span>
      </div>
      </label>
      {/* Checkbox Item */}
      <label className="flex items-start gap-3 cursor-pointer group p-2 -ml-2 rounded hover:bg-surface-container-highest transition-colors">
      <div className="pt-0.5">
      <input className="industrial-checkbox" type="checkbox" />
      </div>
      <div>
      <span className="font-label-md text-label-md text-on-surface block mb-0.5 group-hover:text-primary transition-colors">Technician Status Changes</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant block">Updates when personnel move between active, break, or offline states.</span>
      </div>
      </label>
      </div>
      </section>
      {/* Actions Footer */}
      <div className="flex items-center justify-between pt-6 border-t border-outline-variant mt-8 pb-12">
      <button className="font-label-md text-label-md text-on-surface-variant hover:text-error border border-transparent hover:border-error hover:bg-error/10 px-4 py-2 rounded transition-colors" type="button" data-action-id="reset-to-defaults-11" onClick={actions?.["reset-to-defaults-11"]}>
                                  Reset to Defaults
                              </button>
      <button className="font-label-md text-label-md bg-primary text-on-primary hover:bg-primary-fixed border border-primary px-6 py-2 rounded flex items-center gap-2 transition-colors active:scale-95 shadow-sm" id="save-btn" type="button" data-action-id="save-preferences-12" onClick={actions?.["save-preferences-12"]}>
      <Save className="text-[18px]" aria-hidden={true} focusable="false" />
                                  Save Preferences
                              </button>
      </div>
      </form>
      </div>
      </main>
      </div>
      {/* Feedback Toast (Hidden by default) */}
      <div className="fixed bottom-6 right-6 translate-y-20 opacity-0 bg-surface-bright border border-outline-variant shadow-lg rounded p-4 flex items-center gap-3 transition-colors duration-300 z-50 pointer-events-none" id="toast">
      <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center flex-shrink-0">
      <CheckCircle2 className="text-tertiary text-[18px]" aria-hidden={true} focusable="false" />
      </div>
      <div>
      <p className="font-label-md text-label-md text-on-surface">Preferences Saved</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Your configuration has been updated successfully.</p>
      </div>
      </div>
      
    </>
  );
}
