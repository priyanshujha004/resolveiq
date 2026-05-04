// SHARED TYPES — do not define types elsewhere, put them here
// P1 maintains this file

export type Role = 'CUSTOMER' | 'CDA' | 'DEPT_ADMIN' | 'SUPER_ADMIN';
export type ReportStatus =
  | 'DRAFT' | 'PENDING_CDA' | 'APPROVED_TO_DEPT' | 'IN_PROGRESS'
  | 'COMPLETED' | 'REJECTED' | 'ESCALATED' | 'RESOLVED' | 'CLOSED';
export type IssueType = 'REFUND' | 'DATA_CHANGE' | 'COMPLAINT' | 'OTHER';
export type Priority = 'LOW' | 'MEDIUM' | 'HIGH';

export interface JwtPayload {
  sub: string;
  email: string;
  role: Role;
  tenantId: string;
<<<<<<< HEAD
  name: string | null;
}

export interface UserDto {
  id: string;
  email: string;
  name: string | null;
  role: Role;
  tenantId: string;
  deptId: string | null;
  avatarUrl: string | null;
  isActive: boolean;
  lastLoginAt: string | null;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ReturnPolicyConfig {
  returnWindowDays: number;
  allowedReasons: string[];
  autoApproveBelow: number;
  nonReturnableCategories: string[];
=======
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
}

export interface TenantConfig {
  id: string;
  name: string;
<<<<<<< HEAD
  slug: string;
  departments: { id: string; name: string; description: string | null }[];
  aiPersona: string;
  primaryColor: string;
  plan: string;
  returnPolicy: ReturnPolicyConfig | null;
=======
  departments: string[];
  aiPersona: string;
  primaryColor: string;
>>>>>>> 8fcd563a8d8dba5a8f175ac1f49f740c081411eb
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ReportDraft {
  issueType: IssueType;
  issueSummary: string;
  actionRequested: string;
  routeToDept: string;
  priority: Priority;
}

export interface TimelineEntry {
  id: string;
  reportId: string;
  stage: string;
  actorId: string;
  actorRole: string;
  note?: string;
  createdAt: string;
}

export interface Report {
  id: string;
  tenantId: string;
  customerId: string;
  issueType: IssueType;
  issueSummary: string;
  actionRequested: string;
  routeToDept: string;
  priority: Priority;
  status: ReportStatus;
  currentActor?: string;
  rawConversation: ChatMessage[];
  createdAt: string;
  updatedAt: string;
  timeline: TimelineEntry[];
}

export interface Notification {
  id: string;
  userId: string;
  reportId: string;
  message: string;
  read: boolean;
  createdAt: string;
}
