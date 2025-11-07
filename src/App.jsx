import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Clock, TrendingUp, Plus, Search, Filter, FileText, Circle, CheckCircle2, XCircle, AlertTriangle, BarChart3, PieChart, Activity, Calendar } from 'lucide-react';

export default function ProblemManagementWorkbench() {
  const [problems, setProblems] = useState([
    {
      id: 1,
      title: "Production Database Connection Failure",
      severity: "Critical",
      status: "Resolved",
      dateReported: "2025-10-15",
      dateResolved: "2025-10-15",
      description: "Database connection pool exhausted causing application timeouts and service disruption for 2 hours.",
      rootCause: "Connection pool size was insufficient for peak load traffic",
      impact: "Complete service outage affecting 5000+ users",
      correctiveActions: [
        { text: "Increased connection pool size from 50 to 200", status: "Completed", assignee: "DevOps Team", dueDate: "2025-10-15" },
        { text: "Implemented connection retry logic", status: "Completed", assignee: "Backend Team", dueDate: "2025-10-16" },
        { text: "Added database connection monitoring", status: "Completed", assignee: "SRE Team", dueDate: "2025-10-17" }
      ],
      preventiveActions: [
        { text: "Implement auto-scaling for connection pools", status: "Completed", assignee: "Platform Team", dueDate: "2025-10-18" },
        { text: "Set up predictive load monitoring", status: "In Progress", assignee: "SRE Team", dueDate: "2025-10-25" },
        { text: "Establish connection pool sizing guidelines", status: "Not Started", assignee: "Architecture Team", dueDate: "2025-11-15" },
        { text: "Create load testing protocol for database changes", status: "Not Started", assignee: "QA Team", dueDate: "2025-11-30" }
      ]
    },
    {
      id: 2,
      title: "API Rate Limiting Causing Customer Integration Failures",
      severity: "High",
      status: "In Progress",
      dateReported: "2025-10-16",
      dateResolved: null,
      description: "Multiple enterprise customers reported API timeout errors during peak hours. Rate limits were exceeded causing integration workflows to fail.",
      rootCause: "Rate limiting thresholds set too conservatively without consideration for enterprise tier customers",
      impact: "15 enterprise customers affected, 200+ failed API calls per hour",
      correctiveActions: [
        { text: "Implement tiered rate limiting based on customer plan", status: "Completed", assignee: "API Team", dueDate: "2025-10-17" },
        { text: "Add rate limit headers to API responses", status: "In Progress", assignee: "Backend Team", dueDate: "2025-10-19" },
        { text: "Communicate changes to affected customers", status: "Not Started", assignee: "Customer Success", dueDate: "2025-10-20" }
      ],
      preventiveActions: [
        { text: "Develop rate limit monitoring dashboard", status: "In Progress", assignee: "Platform Team", dueDate: "2025-10-28" },
        { text: "Create customer notification system for approaching limits", status: "Not Started", assignee: "Product Team", dueDate: "2025-11-10" },
        { text: "Review and update API documentation with rate limit details", status: "Not Started", assignee: "Documentation Team", dueDate: "2025-11-05" }
      ]
    },
    {
      id: 3,
      title: "Memory Leak in Background Job Processor",
      severity: "Medium",
      status: "Open",
      dateReported: "2025-10-17",
      dateResolved: null,
      description: "Background job workers consuming increasing amounts of memory over time, requiring daily restarts to maintain performance.",
      rootCause: "Unclosed database connections in long-running job processor threads",
      impact: "Degraded system performance, increased infrastructure costs, manual intervention required daily",
      correctiveActions: [
        { text: "Identify and patch memory leak in job processor code", status: "In Progress", assignee: "Backend Team", dueDate: "2025-10-22" },
        { text: "Implement automatic worker restart on memory threshold", status: "Not Started", assignee: "DevOps Team", dueDate: "2025-10-24" },
        { text: "Add memory usage monitoring and alerting", status: "Not Started", assignee: "SRE Team", dueDate: "2025-10-25" }
      ],
      preventiveActions: [
        { text: "Conduct code review of all background job handlers", status: "Not Started", assignee: "Engineering Leads", dueDate: "2025-11-01" },
        { text: "Implement automated memory leak detection in CI/CD", status: "Not Started", assignee: "Platform Team", dueDate: "2025-11-15" },
        { text: "Establish resource management best practices documentation", status: "Not Started", assignee: "Architecture Team", dueDate: "2025-11-20" }
      ]
    },
    {
      id: 4,
      title: "SSL Certificate Expiration Near-Miss",
      severity: "Critical",
      status: "Resolved",
      dateReported: "2025-10-10",
      dateResolved: "2025-10-10",
      description: "Production SSL certificate discovered to be expiring within 48 hours. GenAI Agent action required to prevent complete service outage.",
      rootCause: "Certificate auto-renewal process failed silently, no monitoring alerts configured for certificate expiration",
      impact: "Near-miss of complete production outage, emergency response required",
      correctiveActions: [
        { text: "GenAI Agent renewed SSL certificate immediately", status: "Completed", assignee: "GenAI Agent", dueDate: "2025-10-10" },
        { text: "Diagnose and fix auto-renewal process", status: "Completed", assignee: "DevOps Team", dueDate: "2025-10-11" },
        { text: "Verify certificate renewal across all environments", status: "Completed", assignee: "SRE Team", dueDate: "2025-10-12" }
      ],
      preventiveActions: [
        { text: "Implement certificate expiration monitoring with 30-day alerts", status: "Completed", assignee: "SRE Team", dueDate: "2025-10-13" },
        { text: "Create automated certificate renewal testing pipeline", status: "Completed", assignee: "Platform Team", dueDate: "2025-10-14" },
        { text: "Document certificate management procedures", status: "In Progress", assignee: "DevOps Team", dueDate: "2025-10-20" },
        { text: "Conduct quarterly certificate audit reviews", status: "Not Started", assignee: "Security Team", dueDate: "2025-11-01" }
      ]
    },
    {
      id: 5,
      title: "Data Synchronization Delay Between Microservices",
      severity: "Low",
      status: "Open",
      dateReported: "2025-10-18",
      dateResolved: null,
      description: "User profile updates taking 5-10 minutes to propagate across all microservices, causing temporary inconsistencies in user experience.",
      rootCause: "Event queue processing running on undersized infrastructure, message processing backlog building during peak hours",
      impact: "Minor user experience issues, occasional display of stale data, no data loss",
      correctiveActions: [
        { text: "Scale up event queue processing workers", status: "Not Started", assignee: "Platform Team", dueDate: "2025-10-21" },
        { text: "Optimize event payload size to reduce processing time", status: "Not Started", assignee: "Backend Team", dueDate: "2025-10-25" },
        { text: "Implement queue depth monitoring and alerting", status: "Not Started", assignee: "SRE Team", dueDate: "2025-10-28" }
      ],
      preventiveActions: [
        { text: "Design event-driven architecture capacity planning model", status: "Not Started", assignee: "Architecture Team", dueDate: "2025-11-10" },
        { text: "Implement circuit breaker pattern for event publishing", status: "Not Started", assignee: "Backend Team", dueDate: "2025-11-20" },
        { text: "Create service mesh observability dashboard", status: "Not Started", assignee: "Platform Team", dueDate: "2025-11-30" }
      ]
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [selectedProblem, setSelectedProblem] = useState(null);
  const [editingAction, setEditingAction] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSeverity, setFilterSeverity] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [activeView, setActiveView] = useState('unresolved');
  const [showAnalytics, setShowAnalytics] = useState(false);

  const [formData, setFormData] = useState({
    title: '',
    severity: 'Medium',
    status: 'Open',
    dateReported: new Date().toISOString().split('T')[0],
    description: '',
    rootCause: '',
    impact: ''
  });

  const generateRecommendations = (problem) => {
    const corrective = [];
    const preventive = [];

    if (problem.severity === 'Critical') {
      corrective.push({ text: "Implement immediate hotfix or rollback", status: "Not Started", assignee: "", dueDate: "" });
      corrective.push({ text: "Establish 24/7 monitoring for affected systems", status: "Not Started", assignee: "", dueDate: "" });
      preventive.push({ text: "Conduct failure mode analysis for critical systems", status: "Not Started", assignee: "", dueDate: "" });
      preventive.push({ text: "Implement redundancy and failover mechanisms", status: "Not Started", assignee: "", dueDate: "" });
    }

    const desc = problem.description.toLowerCase();
    
    if (desc.includes('database') || desc.includes('connection')) {
      corrective.push({ text: "Review and optimize database connection settings", status: "Not Started", assignee: "", dueDate: "" });
      preventive.push({ text: "Establish database capacity planning reviews", status: "Not Started", assignee: "", dueDate: "" });
    }

    if (desc.includes('timeout') || desc.includes('slow')) {
      corrective.push({ text: "Identify and resolve performance bottlenecks", status: "Not Started", assignee: "", dueDate: "" });
      preventive.push({ text: "Implement performance testing in CI/CD pipeline", status: "Not Started", assignee: "", dueDate: "" });
    }

    if (desc.includes('security') || desc.includes('breach')) {
      corrective.push({ text: "Revoke compromised credentials immediately", status: "Not Started", assignee: "", dueDate: "" });
      preventive.push({ text: "Implement security awareness training", status: "Not Started", assignee: "", dueDate: "" });
    }

    if (corrective.length === 0) {
      corrective.push({ text: "Document problem resolution steps", status: "Not Started", assignee: "", dueDate: "" });
    }

    if (preventive.length === 0) {
      preventive.push({ text: "Conduct root cause analysis meeting", status: "Not Started", assignee: "", dueDate: "" });
    }

    return { corrective, preventive };
  };

  const generateSummary = (problem) => {
    const duration = problem.dateResolved 
      ? `Resolved in ${Math.ceil((new Date(problem.dateResolved) - new Date(problem.dateReported)) / (1000 * 60 * 60))} hours`
      : 'Ongoing';
    
    return `${problem.severity} severity problem: ${problem.title}. ${problem.impact || 'Impact assessment pending'}. ${duration}.`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const recommendations = generateRecommendations(formData);
    const newProblem = {
      id: problems.length + 1,
      ...formData,
      correctiveActions: recommendations.corrective,
      preventiveActions: recommendations.preventive
    };
    
    setProblems([newProblem, ...problems]);
    setShowForm(false);
    setFormData({
      title: '',
      severity: 'Medium',
      status: 'Open',
      dateReported: new Date().toISOString().split('T')[0],
      description: '',
      rootCause: '',
      impact: ''
    });
  };

  const updateActionStatus = (problemId, actionType, actionIndex, newStatus) => {
    setProblems(problems.map(p => {
      if (p.id === problemId) {
        const actions = actionType === 'corrective' ? [...p.correctiveActions] : [...p.preventiveActions];
        actions[actionIndex] = { ...actions[actionIndex], status: newStatus };
        return {
          ...p,
          [actionType === 'corrective' ? 'correctiveActions' : 'preventiveActions']: actions
        };
      }
      return p;
    }));
  };

  const updateActionDetails = (problemId, actionType, actionIndex, field, value) => {
    setProblems(problems.map(p => {
      if (p.id === problemId) {
        const actions = actionType === 'corrective' ? [...p.correctiveActions] : [...p.preventiveActions];
        actions[actionIndex] = { ...actions[actionIndex], [field]: value };
        return {
          ...p,
          [actionType === 'corrective' ? 'correctiveActions' : 'preventiveActions']: actions
        };
      }
      return p;
    }));
  };

  const getActionStatusIcon = (status) => {
    switch(status) {
      case 'Completed': return <CheckCircle2 size={18} className="text-green-600" />;
      case 'In Progress': return <Clock size={18} className="text-yellow-600" />;
      case 'Blocked': return <XCircle size={18} className="text-red-600" />;
      case 'Not Started': return <Circle size={18} className="text-gray-400" />;
      default: return <Circle size={18} className="text-gray-400" />;
    }
  };

  const getActionStatusColor = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800 border-green-300';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Blocked': return 'bg-red-100 text-red-800 border-red-300';
      case 'Not Started': return 'bg-gray-100 text-gray-600 border-gray-300';
      default: return 'bg-gray-100 text-gray-600 border-gray-300';
    }
  };

  const filteredProblems = problems.filter(prob => {
    const matchesSearch = prob.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         prob.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = filterSeverity === 'All' || prob.severity === filterSeverity;
    const matchesStatus = filterStatus === 'All' || prob.status === filterStatus;
    const matchesView = activeView === 'unresolved' 
      ? (prob.status === 'Open' || prob.status === 'In Progress')
      : (prob.status === 'Resolved' || prob.status === 'Closed');
    return matchesSearch && matchesSeverity && matchesStatus && matchesView;
  });

  const unresolvedProblems = problems.filter(p => p.status === 'Open' || p.status === 'In Progress');
  const resolvedProblems = problems.filter(p => p.status === 'Resolved' || p.status === 'Closed');

  const getSeverityColor = (severity) => {
    switch(severity) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-300';
      case 'High': return 'bg-orange-100 text-orange-800 border-orange-300';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-300';
      case 'Low': return 'bg-blue-100 text-blue-800 border-blue-300';
      default: return 'bg-gray-100 text-gray-800 border-gray-300';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Open': return 'bg-red-100 text-red-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Closed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const ActionItem = ({ action, index, problemId, actionType }) => {
    const isEditing = editingAction === `${problemId}-${actionType}-${index}`;

    return (
      <div className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-start gap-3 flex-1">
            {getActionStatusIcon(action.status)}
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">{action.text}</p>
            </div>
          </div>
          <button
            onClick={() => setEditingAction(isEditing ? null : `${problemId}-${actionType}-${index}`)}
            className="text-blue-600 hover:text-blue-700 text-xs font-medium"
          >
            {isEditing ? 'Done' : 'Edit'}
          </button>
        </div>

        {isEditing ? (
          <div className="space-y-2 pl-9">
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">Status</label>
              <select
                value={action.status}
                onChange={(e) => updateActionDetails(problemId, actionType, index, 'status', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Blocked</option>
                <option>Completed</option>
              </select>
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">Assignee</label>
              <input
                type="text"
                value={action.assignee}
                onChange={(e) => updateActionDetails(problemId, actionType, index, 'assignee', e.target.value)}
                placeholder="Enter assignee"
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div>
              <label className="text-xs font-medium text-gray-600 block mb-1">Due Date</label>
              <input
                type="date"
                value={action.dueDate}
                onChange={(e) => updateActionDetails(problemId, actionType, index, 'dueDate', e.target.value)}
                className="w-full px-2 py-1 text-sm border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-4 pl-9">
            <span className={`px-2 py-1 rounded text-xs font-medium border ${getActionStatusColor(action.status)}`}>
              {action.status}
            </span>
            {action.assignee && (
              <span className="text-xs text-gray-600">
                👤 {action.assignee}
              </span>
            )}
            {action.dueDate && (
              <span className="text-xs text-gray-600">
                📅 {action.dueDate}
              </span>
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <AlertCircle className="text-blue-600" size={36} />
                CAPAs Workbench
              </h1>
              <p className="text-gray-600 mt-2">Track AI executed CAPAs and exceptions requiring human supervision from recent incidents</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setShowAnalytics(!showAnalytics)}
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-medium"
              >
                <BarChart3 size={20} />
                {showAnalytics ? 'Hide Analytics' : 'View Analytics'}
              </button>
              <button
                onClick={() => setShowForm(!showForm)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors font-medium"
              >
                <Plus size={20} />
                New Problem
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-5 gap-4 mt-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <div className="text-red-600 text-sm font-medium">Open</div>
              <div className="text-2xl font-bold text-red-900">
                {problems.filter(p => p.status === 'Open').length}
              </div>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <div className="text-yellow-600 text-sm font-medium">In Progress</div>
              <div className="text-2xl font-bold text-yellow-900">
                {problems.filter(p => p.status === 'In Progress').length}
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="text-green-600 text-sm font-medium">Resolved</div>
              <div className="text-2xl font-bold text-green-900">
                {problems.filter(p => p.status === 'Resolved').length}
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <div className="text-gray-600 text-sm font-medium">Closed</div>
              <div className="text-2xl font-bold text-gray-900">
                {problems.filter(p => p.status === 'Closed').length}
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="text-blue-600 text-sm font-medium">Total</div>
              <div className="text-2xl font-bold text-blue-900">{problems.length}</div>
            </div>
          </div>

          {/* View Toggle */}
          <div className="mt-6 flex gap-2">
            <button
              onClick={() => setActiveView('unresolved')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                activeView === 'unresolved'
                  ? 'bg-orange-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <AlertTriangle size={20} />
                <span>On-going Incidents ({unresolvedProblems.length})</span>
              </div>
            </button>
            <button
              onClick={() => setActiveView('resolved')}
              className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all ${
                activeView === 'resolved'
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center gap-2">
                <CheckCircle2 size={20} />
                <span>Resolved Incidents ({resolvedProblems.length})</span>
              </div>
            </button>
          </div>
        </div>

        {/* Analytics Dashboard */}
        {showAnalytics && (
          <div className="mb-6 space-y-6">
            {/* Key Metrics Row */}
            <div className="grid grid-cols-4 gap-4">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Mean Time to Resolution</h3>
                  <Clock className="text-blue-600" size={20} />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {(() => {
                    const resolved = problems.filter(p => p.dateResolved);
                    if (resolved.length === 0) return 'N/A';
                    const avgHours = resolved.reduce((sum, p) => {
                      return sum + (new Date(p.dateResolved) - new Date(p.dateReported)) / (1000 * 60 * 60);
                    }, 0) / resolved.length;
                    return `${Math.round(avgHours)}h`;
                  })()}
                </div>
                <p className="text-xs text-gray-500 mt-1">Average resolution time</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Action Completion Rate</h3>
                  <CheckCircle2 className="text-green-600" size={20} />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {(() => {
                    const allActions = problems.flatMap(p => [...p.correctiveActions, ...p.preventiveActions]);
                    if (allActions.length === 0) return '0%';
                    const completed = allActions.filter(a => a.status === 'Completed').length;
                    return `${Math.round((completed / allActions.length) * 100)}%`;
                  })()}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {problems.flatMap(p => [...p.correctiveActions, ...p.preventiveActions]).filter(a => a.status === 'Completed').length} of {problems.flatMap(p => [...p.correctiveActions, ...p.preventiveActions]).length} actions completed
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Open Problems</h3>
                  <AlertTriangle className="text-orange-600" size={20} />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {problems.filter(p => p.status === 'Open' || p.status === 'In Progress').length}
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {problems.filter(p => p.status === 'Open').length} open, {problems.filter(p => p.status === 'In Progress').length} in progress
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-gray-600">Critical Issues</h3>
                  <XCircle className="text-red-600" size={20} />
                </div>
                <div className="text-3xl font-bold text-gray-900">
                  {problems.filter(p => p.severity === 'Critical' && (p.status === 'Open' || p.status === 'In Progress')).length}
                </div>
                <p className="text-xs text-gray-500 mt-1">Requiring immediate attention</p>
              </div>
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Problems by Severity */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <PieChart size={20} className="text-purple-600" />
                  Incidents by Severity
                </h3>
                <div className="space-y-3">
                  {['Critical', 'High', 'Medium', 'Low'].map(severity => {
                    const count = problems.filter(p => p.severity === severity).length;
                    const percentage = problems.length > 0 ? (count / problems.length) * 100 : 0;
                    const color = severity === 'Critical' ? 'bg-red-500' : 
                                 severity === 'High' ? 'bg-orange-500' : 
                                 severity === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500';
                    
                    return (
                      <div key={severity}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{severity}</span>
                          <span className="text-sm font-bold text-gray-900">{count}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`${color} h-2 rounded-full transition-all duration-500`} style={{ width: `${percentage}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Status Distribution */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Activity size={20} className="text-blue-600" />
                  Status Distribution
                </h3>
                <div className="space-y-3">
                  {['Open', 'In Progress', 'Resolved', 'Closed'].map(status => {
                    const count = problems.filter(p => p.status === status).length;
                    const percentage = problems.length > 0 ? (count / problems.length) * 100 : 0;
                    const color = status === 'Open' ? 'bg-red-500' : 
                                 status === 'In Progress' ? 'bg-yellow-500' : 
                                 status === 'Resolved' ? 'bg-green-500' : 'bg-gray-500';
                    
                    return (
                      <div key={status}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{status}</span>
                          <span className="text-sm font-bold text-gray-900">{count}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`${color} h-2 rounded-full transition-all duration-500`} style={{ width: `${percentage}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Action Tracking Row */}
            <div className="grid grid-cols-2 gap-6">
              {/* Corrective Actions Status */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText size={20} className="text-blue-600" />
                  Corrective Actions Status
                </h3>
                <div className="space-y-3">
                  {['Completed', 'In Progress', 'Blocked', 'Not Started'].map(status => {
                    const allCorrectiveActions = problems.flatMap(p => p.correctiveActions);
                    const count = allCorrectiveActions.filter(a => a.status === status).length;
                    const percentage = allCorrectiveActions.length > 0 ? (count / allCorrectiveActions.length) * 100 : 0;
                    const color = status === 'Completed' ? 'bg-green-500' : 
                                 status === 'In Progress' ? 'bg-yellow-500' : 
                                 status === 'Blocked' ? 'bg-red-500' : 'bg-gray-400';
                    
                    return (
                      <div key={status}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{status}</span>
                          <span className="text-sm font-bold text-gray-900">{count} ({Math.round(percentage)}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`${color} h-2 rounded-full transition-all duration-500`} style={{ width: `${percentage}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    Total: <span className="font-bold text-gray-900">{problems.flatMap(p => p.correctiveActions).length}</span> actions
                  </div>
                </div>
              </div>

              {/* Preventive Actions Status */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <TrendingUp size={20} className="text-green-600" />
                  Preventive Actions Status
                </h3>
                <div className="space-y-3">
                  {['Completed', 'In Progress', 'Blocked', 'Not Started'].map(status => {
                    const allPreventiveActions = problems.flatMap(p => p.preventiveActions);
                    const count = allPreventiveActions.filter(a => a.status === status).length;
                    const percentage = allPreventiveActions.length > 0 ? (count / allPreventiveActions.length) * 100 : 0;
                    const color = status === 'Completed' ? 'bg-green-500' : 
                                 status === 'In Progress' ? 'bg-yellow-500' : 
                                 status === 'Blocked' ? 'bg-red-500' : 'bg-gray-400';
                    
                    return (
                      <div key={status}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">{status}</span>
                          <span className="text-sm font-bold text-gray-900">{count} ({Math.round(percentage)}%)</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`${color} h-2 rounded-full transition-all duration-500`} style={{ width: `${percentage}%` }}></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <div className="text-sm text-gray-600">
                    Total: <span className="font-bold text-gray-900">{problems.flatMap(p => p.preventiveActions).length}</span> actions
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline View */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calendar size={20} className="text-indigo-600" />
                Incidents (Last 30 Days)
              </h3>
              <div className="space-y-2">
                {problems
                  .sort((a, b) => new Date(b.dateReported) - new Date(a.dateReported))
                  .map(problem => (
                    <div key={problem.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="w-24 text-xs text-gray-500 flex-shrink-0">
                        {problem.dateReported}
                      </div>
                      <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                        problem.severity === 'Critical' ? 'bg-red-500' :
                        problem.severity === 'High' ? 'bg-orange-500' :
                        problem.severity === 'Medium' ? 'bg-yellow-500' : 'bg-blue-500'
                      }`}></div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-gray-900">{problem.title}</div>
                        <div className="text-xs text-gray-500">{problem.severity} severity</div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(problem.status)}`}>
                        {problem.status}
                      </div>
                      {problem.dateResolved && (
                        <div className="text-xs text-green-600 flex items-center gap-1 flex-shrink-0">
                          <CheckCircle size={14} />
                          {problem.dateResolved}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>

            {/* Top Issues by Impact */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <AlertCircle size={20} className="text-red-600" />
                High Impact Problems Requiring Attention
              </h3>
              <div className="space-y-3">
                {problems
                  .filter(p => p.status === 'Open' || p.status === 'In Progress')
                  .sort((a, b) => {
                    const severityOrder = { 'Critical': 0, 'High': 1, 'Medium': 2, 'Low': 3 };
                    return severityOrder[a.severity] - severityOrder[b.severity];
                  })
                  .slice(0, 5)
                  .map(problem => {
                    const totalActions = problem.correctiveActions.length + problem.preventiveActions.length;
                    const completedActions = [...problem.correctiveActions, ...problem.preventiveActions]
                      .filter(a => a.status === 'Completed').length;
                    const progressPercentage = totalActions > 0 ? (completedActions / totalActions) * 100 : 0;

                    return (
                      <div key={problem.id} className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900">{problem.title}</h4>
                            <p className="text-sm text-gray-600 mt-1">{problem.impact}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium border flex-shrink-0 ml-3 ${getSeverityColor(problem.severity)}`}>
                            {problem.severity}
                          </span>
                        </div>
                        <div className="flex items-center gap-4 mt-3">
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs text-gray-600">Action Progress</span>
                              <span className="text-xs font-medium text-gray-900">{completedActions}/{totalActions}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 h-2 rounded-full transition-all duration-500" style={{ width: `${progressPercentage}%` }}></div>
                            </div>
                          </div>
                          <span className="text-xs text-gray-500">
                            {problem.dateReported}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                {problems.filter(p => p.status === 'Open' || p.status === 'In Progress').length === 0 && (
                  <div className="text-center py-8 text-gray-500">
                    <CheckCircle2 size={48} className="mx-auto mb-2 text-green-500" />
                    <p>No open problems - Great work!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Dashboard Summary Cards */}
        {activeView === 'unresolved' && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Critical Attention Required</h3>
              <div className="space-y-3">
                {unresolvedProblems.filter(p => p.severity === 'Critical').length > 0 ? (
                  unresolvedProblems.filter(p => p.severity === 'Critical').map(p => (
                    <div key={p.id} className="text-sm p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="font-medium text-red-900">{p.title}</div>
                      <div className="text-red-700 text-xs mt-1">{p.status}</div>
                    </div>
                  ))
                ) : (
                  <div className="text-sm text-gray-500 italic">No critical repair items</div>
                )}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Actions pending your review</h3>
              <div className="space-y-2">
                {(() => {
                  const today = new Date();
                  const weekFromNow = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
                  const dueActions = unresolvedProblems.flatMap(p => 
                    [...p.correctiveActions, ...p.preventiveActions]
                      .filter(a => a.dueDate && a.status !== 'Completed' && new Date(a.dueDate) <= weekFromNow)
                      .map(a => ({ ...a, problemTitle: p.title }))
                  );
                  
                  return dueActions.length > 0 ? (
                    dueActions.slice(0, 5).map((action, idx) => (
                      <div key={idx} className="text-sm p-2 bg-yellow-50 rounded border border-yellow-200">
                        <div className="font-medium text-yellow-900 text-xs">{action.problemTitle}</div>
                        <div className="text-yellow-800 text-xs">{action.text}</div>
                        <div className="text-yellow-600 text-xs mt-1">Due: {action.dueDate}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500 italic">No actions due this week</div>
                  );
                })()}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Blocked Actions</h3>
              <div className="space-y-2">
                {(() => {
                  const blockedActions = unresolvedProblems.flatMap(p => 
                    [...p.correctiveActions, ...p.preventiveActions]
                      .filter(a => a.status === 'Blocked')
                      .map(a => ({ ...a, problemTitle: p.title }))
                  );
                  
                  return blockedActions.length > 0 ? (
                    blockedActions.map((action, idx) => (
                      <div key={idx} className="text-sm p-2 bg-red-50 rounded border border-red-200">
                        <div className="font-medium text-red-900 text-xs">{action.problemTitle}</div>
                        <div className="text-red-800 text-xs">{action.text}</div>
                        <div className="text-red-600 text-xs mt-1">Assignee: {action.assignee || 'Unassigned'}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500 italic">No blocked actions</div>
                  );
                })()}
              </div>
            </div>
          </div>
        )}

        {activeView === 'resolved' && (
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recently Resolved Incidents</h3>
              <div className="space-y-3">
                {resolvedProblems.slice(0, 3).map(p => (
                  <div key={p.id} className="text-sm p-3 bg-green-50 rounded-lg border border-green-200">
                    <div className="font-medium text-green-900">{p.title}</div>
                    <div className="text-green-700 text-xs mt-1">
                      Resolved: {p.dateResolved}
                    </div>
                    <div className="text-green-600 text-xs">
                      Severity: {p.severity}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Outstanding Corrective/Preventive Actions requiring Human review and execution</h3>
              <div className="space-y-2">
                {(() => {
                  const outstandingActions = resolvedProblems.flatMap(p => 
                    p.preventiveActions
                      .filter(a => a.status !== 'Completed')
                      .map(a => ({ ...a, problemTitle: p.title, problemId: p.id }))
                  );
                  
                  return outstandingActions.length > 0 ? (
                    outstandingActions.slice(0, 5).map((action, idx) => (
                      <div key={idx} className="text-sm p-2 bg-blue-50 rounded border border-blue-200">
                        <div className="font-medium text-blue-900 text-xs">{action.problemTitle}</div>
                        <div className="text-blue-800 text-xs">{action.text}</div>
                        <div className="text-blue-600 text-xs mt-1 flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded ${getActionStatusColor(action.status)} text-xs`}>
                            {action.status}
                          </span>
                          {action.dueDate && <span>Due: {action.dueDate}</span>}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-sm text-gray-500 italic">All preventive actions completed</div>
                  );
                })()}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Resolution Metrics</h3>
              <div className="space-y-3">
                <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="text-sm font-medium text-purple-900">Avg Resolution Time</div>
                  <div className="text-2xl font-bold text-purple-800">
                    {(() => {
                      const resolved = resolvedProblems.filter(p => p.dateResolved);
                      if (resolved.length === 0) return 'N/A';
                      const avgHours = resolved.reduce((sum, p) => {
                        return sum + (new Date(p.dateResolved) - new Date(p.dateReported)) / (1000 * 60 * 60);
                      }, 0) / resolved.length;
                      return `${Math.round(avgHours)}h`;
                    })()}
                  </div>
                </div>
                <div className="p-3 bg-indigo-50 rounded-lg border border-indigo-200">
                  <div className="text-sm font-medium text-indigo-900">Incidents by Severity</div>
                  <div className="mt-2 space-y-1">
                    {['Critical', 'High', 'Medium', 'Low'].map(sev => {
                      const count = resolvedProblems.filter(p => p.severity === sev).length;
                      return count > 0 ? (
                        <div key={sev} className="text-xs text-indigo-800 flex justify-between">
                          <span>{sev}</span>
                          <span className="font-bold">{count}</span>
                        </div>
                      ) : null;
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* New Problem Form */}
        {showForm && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Report New Problem</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Severity *</label>
                  <select
                    value={formData.severity}
                    onChange={(e) => setFormData({...formData, severity: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                    <option>Critical</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Status *</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option>Open</option>
                    <option>In Progress</option>
                    <option>Resolved</option>
                    <option>Closed</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Date Reported *</label>
                  <input
                    type="date"
                    value={formData.dateReported}
                    onChange={(e) => setFormData({...formData, dateReported: e.target.value})}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Describe what happened..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Impact</label>
                <textarea
                  value={formData.impact}
                  onChange={(e) => setFormData({...formData, impact: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Who/what was affected?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Root Cause</label>
                <textarea
                  value={formData.rootCause}
                  onChange={(e) => setFormData({...formData, rootCause: e.target.value})}
                  rows={2}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What was the underlying cause?"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Create Problem
                </button>
                <button
                  onClick={() => setShowForm(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
          <div className="flex gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search incidents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter size={20} className="text-gray-500" />
              <select
                value={filterSeverity}
                onChange={(e) => setFilterSeverity(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All Severities</option>
                <option>Critical</option>
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option>All Statuses</option>
                <option>Open</option>
                <option>In Progress</option>
                <option>Resolved</option>
                <option>Closed</option>
              </select>
            </div>
          </div>
        </div>

        {/* Problems List */}
        <div className="space-y-4">
          {filteredProblems.map(problem => {
            const summary = generateSummary(problem);
            const isSelected = selectedProblem === problem.id;

            return (
              <div key={problem.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-50 transition-colors"
                  onClick={() => setSelectedProblem(isSelected ? null : problem.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-gray-900">{problem.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getSeverityColor(problem.severity)}`}>
                          {problem.severity}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(problem.status)}`}>
                          {problem.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{summary}</p>
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          Reported: {problem.dateReported}
                        </span>
                        {problem.dateResolved && (
                          <span className="flex items-center gap-1">
                            <CheckCircle size={16} />
                            Resolved: {problem.dateResolved}
                          </span>
                        )}
                      </div>
                    </div>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      {isSelected ? 'Hide Details' : 'View Details'}
                    </button>
                  </div>
                </div>

                {isSelected && (
                  <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">Description</h4>
                        <p className="text-gray-700 text-sm mb-4">{problem.description}</p>
                        
                        {problem.impact && (
                          <>
                            <h4 className="font-bold text-gray-900 mb-2">Impact</h4>
                            <p className="text-gray-700 text-sm mb-4">{problem.impact}</p>
                          </>
                        )}

                        {problem.rootCause && (
                          <>
                            <h4 className="font-bold text-gray-900 mb-2">Root Cause</h4>
                            <p className="text-gray-700 text-sm">{problem.rootCause}</p>
                          </>
                        )}
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-bold text-gray-900 mb-2">Action Progress</h4>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-blue-900 mb-1">Corrective Actions</div>
                          <div className="flex gap-2 text-xs">
                            <span className="text-green-700">✓ {problem.correctiveActions.filter(a => a.status === 'Completed').length} Complete</span>
                            <span className="text-yellow-700">⟳ {problem.correctiveActions.filter(a => a.status === 'In Progress').length} In Progress</span>
                            <span className="text-gray-600">○ {problem.correctiveActions.filter(a => a.status === 'Not Started').length} Not Started</span>
                          </div>
                        </div>
                        <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                          <div className="text-sm font-medium text-green-900 mb-1">Preventive Actions</div>
                          <div className="flex gap-2 text-xs">
                            <span className="text-green-700">✓ {problem.preventiveActions.filter(a => a.status === 'Completed').length} Complete</span>
                            <span className="text-yellow-700">⟳ {problem.preventiveActions.filter(a => a.status === 'In Progress').length} In Progress</span>
                            <span className="text-gray-600">○ {problem.preventiveActions.filter(a => a.status === 'Not Started').length} Not Started</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
                          <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                            <FileText size={18} />
                            Corrective Actions
                          </h4>
                          <div className="space-y-3">
                            {problem.correctiveActions.map((action, idx) => (
                              <ActionItem 
                                key={idx}
                                action={action}
                                index={idx}
                                problemId={problem.id}
                                actionType="corrective"
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
                          <h4 className="font-bold text-green-900 mb-3 flex items-center gap-2">
                            <TrendingUp size={18} />
                            Preventive Actions
                          </h4>
                          <div className="space-y-3">
                            {problem.preventiveActions.map((action, idx) => (
                              <ActionItem 
                                key={idx}
                                action={action}
                                index={idx}
                                problemId={problem.id}
                                actionType="preventive"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {filteredProblems.length === 0 && (
            <div className="bg-white rounded-lg shadow-lg p-12 text-center">
              <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
              <p className="text-gray-600">No problems found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}