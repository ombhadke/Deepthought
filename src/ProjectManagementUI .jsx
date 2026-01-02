import React, { useState } from 'react';
import { Search, Bell, User, ChevronDown, Plus, MoreHorizontal, Clock, BookOpen, Target, CheckCircle } from 'lucide-react';

const ProjectManagementUI = () => {
  const [activeView, setActiveView] = useState('collapsed');
  const [activeAsset, setActiveAsset] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', message: '' });

  // Project data
  const projectData = {
    title: "Technical Project Management",
    shortDescription: "You can learn project management by applying the simple methods of project management. How you can apply project management in each and every step of your deliverables? Let's figure it out together",
    commitment: "4 hours",
    learningOutcomes: [
      "Bare minimum knowledge of project management",
      "4SA Concept",
      "Would be able to handle any project efficiently"
    ],
    preRequisites: [
      "An open mind to learn any concept",
      "Thought of Unlearning and Relearning"
    ],
    task: {
      title: "Explore the world of management",
      description: "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling and completion. How? Do you want to manage each and every step of your life?",
      assets: [
        {
          id: 18883,
          title: "Technical Project Management",
          description: "Story of Alignment\nScope of Agility\nSpecific Accountable\nStaggering Approach",
          content: "https://www.youtube.com/embed/TiMRwri1xJ8",
          type: "display_asset",
          contentType: "video"
        },
        {
          id: 18884,
          title: "Threadbuild",
          description: "Watch the video and thread build, and jot out key threads while watching that video.",
          type: "input_asset",
          contentType: "threadbuilder"
        },
        {
          id: 18885,
          title: "Structure you pointers",
          description: "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
          type: "input_asset",
          contentType: "article"
        },
        {
          id: 18886,
          title: "4SA Method",
          description: "To explore more read more",
          content: "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
          type: "display_asset",
          contentType: "article"
        }
      ]
    },
    description: `Have you ever thought, Pareto's Law can be applied to cooking? Your thinking starts when you start thinking beyond your thinking.

Let's prepare Sandwiches, we will use Pareto's Law. That's an 80-20 approach.
80% of the time in researching, and planning and 20% of the time in implementation.

So for preparing sandwiches, we need vegetables, bread, cheese, butter and much more. So initially we collect all the stuff and then chop the vegetables, grate the cheese, and make a mash of potato. So this all comes in 80% and then comes 20% where we will roast the bread, spread the sauce, place the mash put some cheese, and heat it for a while and our sandwich is ready.

Similarly while creating any functionality 80% of the time is spent on consequences that might appear, some parameters we have to take care of, the scope of the variable, and some dependent functions, and then 20% comes from implementation.

Let's start thinking together, and search for how you can get the essence of project management.`
  };

  const [threads, setThreads] = useState([
    { id: 'A', subThreads: ['', ''], interpretations: ['', ''], summary: '' }
  ]);

  const [articleContent, setArticleContent] = useState({
    title: '',
    content: ''
  });

  const addSubThread = (threadId) => {
    setThreads(threads.map(t => 
      t.id === threadId 
        ? { ...t, subThreads: [...t.subThreads, ''] }
        : t
    ));
  };

  const updateSubThread = (threadId, index, value) => {
    setThreads(threads.map(t => 
      t.id === threadId 
        ? { 
            ...t, 
            subThreads: t.subThreads.map((st, i) => i === index ? value : st)
          }
        : t
    ));
  };

  const updateSummary = (threadId, value) => {
    setThreads(threads.map(t => 
      t.id === threadId ? { ...t, summary: value } : t
    ));
  };

  const openModal = (title, message) => {
    setModalContent({ title, message });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleSearch = () => {
    openModal('Search', 'Search functionality will help you find specific content, tasks, and resources within the platform. Enter keywords to discover relevant materials.');
  };

  const handleNotifications = () => {
    openModal('Notifications', 'You have no new notifications at this time. We\'ll notify you about:\n• New task assignments\n• Project updates\n• Deadline reminders\n• Feedback on submissions');
  };

  const handleProfile = () => {
    openModal('Profile', 'Access your profile to:\n• View your progress and achievements\n• Update personal information\n• Manage account settings\n• View submission history\n• Track learning outcomes');
  };

  const handleHelp = () => {
    openModal('Help & Support', 'Need assistance? Here\'s how we can help:\n• Access tutorial videos\n• Read documentation\n• Contact support team\n• View FAQs\n• Report issues\n\nFeel free to reach out if you have any questions!');
  };

  return (
    <div className="h-screen w-full bg-white">
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-3 sticky top-0 z-50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DT</span>
              </div>
              <span className="font-bold text-lg">DEEP THOUGHT</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              onClick={handleSearch}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Search"
            >
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={handleNotifications}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors relative"
              title="Notifications"
            >
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button 
              onClick={handleProfile}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              title="Profile"
            >
              <User className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* View Toggle */}
      <div className="bg-white border-b border-gray-200 px-6 py-3 sticky top-14 z-40">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveView('collapsed')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeView === 'collapsed'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Collapsed Journey Board
          </button>
          <button
            onClick={() => setActiveView('expanded')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeView === 'expanded'
                ? 'bg-blue-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Expanded Journey Board
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <div className="">
          {/* Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {projectData.title}
            </h1>
            <p className="text-gray-600 mb-4">{projectData.shortDescription}</p>
            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">{projectData.commitment}</span>
              </div>
              <button className="text-blue-600 font-medium hover:text-blue-700">
                Submit task
              </button>
            </div>
          </div>

          {/* Learning Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center space-x-2 mb-3">
                <Target className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Learning Outcomes</h3>
              </div>
              <ul className="space-y-2">
                {projectData.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="flex items-center space-x-2 mb-3">
                <BookOpen className="w-5 h-5 text-blue-600" />
                <h3 className="font-semibold text-gray-900">Pre-requisites</h3>
              </div>
              <ul className="space-y-2">
                {projectData.preRequisites.map((prereq, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-sm text-gray-700">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>{prereq}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Task Description Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <h2 className="text-xl font-semibold mb-3">{projectData.task.title}</h2>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              {projectData.task.description}
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
              <p className="text-sm text-gray-700 whitespace-pre-line">{projectData.description}</p>
            </div>
          </div>

          {activeView === 'collapsed' && (
            <div className="space-y-6">
              {/* Asset 1: Technical Project Management Video */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-white text-gray-900 px-4 py-3 flex items-center justify-between">
                  <span className="font-semibold">{projectData.task.assets[0].title}</span>
                  <button className="text-gray-900 hover:text-gray-700">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 mb-4 whitespace-pre-line">
                    <span className="font-semibold">Description:</span> {projectData.task.assets[0].description}
                  </p>
                  <div className="relative rounded-lg overflow-hidden bg-white" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      src={projectData.task.assets[0].content}
                      className="absolute top-0 left-0 w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>

              {/* Asset 2: Threadbuild */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-white text-gray-900 px-4 py-3 flex items-center justify-between">
                  <span className="font-semibold">{projectData.task.assets[1].title}</span>
                  <button className="text-gray-900 hover:text-gray-700">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-700 mb-4">
                    <span className="font-semibold">Description:</span> {projectData.task.assets[1].description}
                  </p>
                  
                  {threads.map((thread, threadIdx) => (
                    <div key={thread.id} className="mb-6">
                      <h3 className="font-semibold mb-4">Thread {thread.id}</h3>
                      
                      <div className="space-y-3 mb-4">
                        {thread.subThreads.map((subThread, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                              <span className="text-xs font-medium">{idx + 1}</span>
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-medium mb-1">Sub thread {idx + 1}</div>
                              <input
                                type="text"
                                placeholder="Enter Text here"
                                value={subThread}
                                onChange={(e) => updateSubThread(thread.id, idx, e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      <button
                        onClick={() => addSubThread(thread.id)}
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium mb-4"
                      >
                        + Add Sub-thread
                      </button>

                      <div className="flex space-x-4 pt-4 border-t border-gray-200">
                        <button className="text-sm text-gray-600 hover:text-gray-900">Sub-thread</button>
                        <button className="text-sm text-gray-600 hover:text-gray-900">
                          Summary for Thread {thread.id}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Asset 3: Structure your pointers (Article) */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-white text-gray-900 px-4 py-3 flex items-center justify-between">
                  <span className="font-semibold">{projectData.task.assets[2].title}</span>
                  <button className="text-gray-900 hover:text-gray-700">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4 space-y-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Description:</span> {projectData.task.assets[2].description}
                  </p>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Title</label>
                    <input
                      type="text"
                      value={articleContent.title}
                      onChange={(e) => setArticleContent({ ...articleContent, title: e.target.value })}
                      placeholder="Enter article title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Content</label>
                    <div className="border border-gray-300 rounded-lg overflow-hidden">
                      <div className="flex items-center space-x-4 px-3 py-2 bg-gray-50 border-b border-gray-300 text-gray-600">
                        <button className="hover:text-gray-900"><strong>B</strong></button>
                        <button className="hover:text-gray-900"><em>I</em></button>
                        <button className="hover:text-gray-900"><u>U</u></button>
                        <div className="w-px h-4 bg-gray-300"></div>
                        <select className="text-sm bg-transparent focus:outline-none">
                          <option>Paragraph</option>
                          <option>Heading 1</option>
                          <option>Heading 2</option>
                        </select>
                      </div>
                      <textarea
                        rows="8"
                        value={articleContent.content}
                        onChange={(e) => setArticleContent({ ...articleContent, content: e.target.value })}
                        className="w-full p-3 focus:outline-none text-sm"
                        placeholder="Write your 400-500 word article here..."
                      />
                      <div className="px-3 py-2 bg-gray-50 border-t border-gray-300 text-xs text-gray-500">
                        Word count: {articleContent.content.split(/\s+/).filter(w => w).length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Asset 4: 4SA Method */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <div className="bg-white text-gray-900 px-4 py-3 flex items-center justify-between">
                  <span className="font-semibold">{projectData.task.assets[3].title}</span>
                  <button className="text-gray-900 hover:text-gray-700">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-4 space-y-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-semibold">Description:</span> {projectData.task.assets[3].description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-medium mb-2">Introduction</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        The 4SA Method represents: Story of Alignment, Scope of Agility, Specific Accountable, and Staggering Approach
                      </p>
                      <a
                        href={projectData.task.assets[3].content}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                      >
                        See More →
                      </a>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-2">Thread A</h4>
                      <p className="text-sm text-gray-700 mb-3">
                        How you will apply knowledge in real world scenarios? Demonstrate a strategy from knowledge to project design.
                      </p>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">
                        See More →
                      </button>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium mb-2">Example 1</h4>
                      <p className="text-sm text-gray-700">
                        You have a concept - How will you use your program?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === 'expanded' && (
            <div className="space-y-6">
              {/* Expanded view with all assets fully shown */}
              <details open className="bg-white rounded-lg shadow-sm border border-gray-200">
                <summary className="cursor-pointer px-4 py-3 font-semibold hover:bg-gray-50 flex items-center justify-between">
                  <span>{projectData.task.title}</span>
                  <ChevronDown className="w-5 h-5" />
                </summary>
                <div className="px-4 pb-4">
                  <p className="text-sm text-gray-600 mb-3">{projectData.task.description}</p>
                  <div className="space-y-2 text-sm">
                    {projectData.task.assets.map((asset, idx) => (
                      <div key={asset.id} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-gray-700">{asset.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </details>

              {/* All assets displayed with expanded details */}
              {projectData.task.assets.map((asset, idx) => (
                <div key={asset.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                  <div className="bg-white text-gray-900 px-4 py-3 flex items-center justify-between">
                    <span className="font-semibold">{asset.title}</span>
                    <button className="text-gray-900 hover:text-gray-700">
                      <MoreHorizontal className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-gray-700 mb-4 whitespace-pre-line">
                      <span className="font-semibold">Description:</span> {asset.description}
                    </p>
                    
                    {asset.contentType === 'video' && (
                      <div className="relative rounded-lg overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
                        <iframe
                          src={asset.content}
                          className="absolute top-0 left-0 w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                    )}

                    {asset.contentType === 'threadbuilder' && (
                      <div>
                        {threads.map((thread) => (
                          <div key={thread.id} className="mb-6">
                            <h3 className="font-semibold mb-4">Thread {thread.id}</h3>
                            
                            <div className="space-y-3 mb-4">
                              {thread.subThreads.map((subThread, idx) => (
                                <div key={idx} className="flex items-start space-x-3">
                                  <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                    <span className="text-xs font-medium">{idx + 1}</span>
                                  </div>
                                  <div className="flex-1">
                                    <div className="text-sm font-medium mb-1">Sub thread {idx + 1}</div>
                                    <input
                                      type="text"
                                      placeholder="Enter Text here"
                                      value={subThread}
                                      onChange={(e) => updateSubThread(thread.id, idx, e.target.value)}
                                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="bg-blue-600 text-white rounded-lg px-4 py-3 mb-3">
                              <div className="font-medium mb-2">Summary for Thread {thread.id}</div>
                              <input
                                type="text"
                                placeholder="Enter summary here"
                                value={thread.summary}
                                onChange={(e) => updateSummary(thread.id, e.target.value)}
                                className="w-full bg-white text-gray-900 px-3 py-2 rounded-lg text-sm focus:outline-none"
                              />
                            </div>

                            <button
                              onClick={() => addSubThread(thread.id)}
                              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                            >
                              + Add Sub-thread
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {asset.contentType === 'article' && (
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium mb-2">Title</label>
                          <input
                            type="text"
                            value={articleContent.title}
                            onChange={(e) => setArticleContent({ ...articleContent, title: e.target.value })}
                            placeholder="Enter article title"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium mb-2">Content</label>
                          <div className="border border-gray-300 rounded-lg overflow-hidden">
                            <div className="flex items-center space-x-4 px-3 py-2 bg-gray-50 border-b border-gray-300 text-gray-600">
                              <button className="hover:text-gray-900"><strong>B</strong></button>
                              <button className="hover:text-gray-900"><em>I</em></button>
                              <button className="hover:text-gray-900"><u>U</u></button>
                              <div className="w-px h-4 bg-gray-300"></div>
                              <select className="text-sm bg-transparent focus:outline-none">
                                <option>Paragraph</option>
                                <option>Heading 1</option>
                                <option>Heading 2</option>
                              </select>
                            </div>
                            <textarea
                              rows="10"
                              value={articleContent.content}
                              onChange={(e) => setArticleContent({ ...articleContent, content: e.target.value })}
                              className="w-full p-3 focus:outline-none text-sm"
                              placeholder="Write your 400-500 word article here..."
                            />
                            <div className="px-3 py-2 bg-gray-50 border-t border-gray-300 text-xs text-gray-500 flex justify-between">
                              <span>Word count: {articleContent.content.split(/\s+/).filter(w => w).length}</span>
                              <span className={articleContent.content.split(/\s+/).filter(w => w).length >= 400 && articleContent.content.split(/\s+/).filter(w => w).length <= 500 ? 'text-green-600' : 'text-orange-600'}>
                                Target: 400-500 words
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Help Button */}
      <button 
        onClick={handleHelp}
        className="fixed bottom-6 right-6 w-12 h-12 bg-blue-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-blue-700 transition-colors"
        title="Help & Support"
      >
        <span className="text-xl">?</span>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full animate-fadeIn">
            <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">{modalContent.title}</h3>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-600 whitespace-pre-line leading-relaxed">{modalContent.message}</p>
            </div>
            <div className="border-t border-gray-200 px-6 py-4 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectManagementUI;