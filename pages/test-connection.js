import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import Head from 'next/head';

export default function TestConnection() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('Testing...');

  useEffect(() => {
    testConnection();
  }, []);

  const testConnection = async () => {
    try {
      setLoading(true);
      setConnectionStatus('Testing Supabase connection...');
      
      // Test basic connection
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .limit(5);

      if (error) {
        throw error;
      }

      setProjects(data || []);
      setConnectionStatus('✅ Connection successful!');
    } catch (err) {
      setError(err.message);
      setConnectionStatus('❌ Connection failed');
      console.error('Connection error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Supabase Connection Test - Comcreate</title>
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-magenta-900 p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-black/40 backdrop-blur-lg rounded-2xl border border-purple-500/20 p-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-magenta-400 bg-clip-text text-transparent mb-6">
              Supabase Connection Test
            </h1>

            {/* Connection Status */}
            <div className="mb-8">
              <div className={`p-4 rounded-lg ${
                connectionStatus.includes('✅') 
                  ? 'bg-green-500/20 border border-green-500/50' 
                  : connectionStatus.includes('❌')
                  ? 'bg-red-500/20 border border-red-500/50'
                  : 'bg-yellow-500/20 border border-yellow-500/50'
              }`}>
                <p className="text-lg font-semibold text-white">{connectionStatus}</p>
              </div>
            </div>

            {/* Error Display */}
            {error && (
              <div className="mb-8 bg-red-500/20 border border-red-500/50 rounded-lg p-4">
                <h3 className="text-red-300 font-semibold mb-2">Error Details:</h3>
                <p className="text-red-200 text-sm">{error}</p>
              </div>
            )}

            {/* Loading State */}
            {loading && (
              <div className="text-center py-8">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
                <p className="text-white">Loading data from Supabase...</p>
              </div>
            )}

            {/* Projects Data */}
            {!loading && projects.length > 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white mb-4">
                  Projects from Database ({projects.length} found)
                </h2>
                
                <div className="grid gap-4">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-white">{project.project_name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          project.status === 'completed' ? 'bg-green-500/20 text-green-300' :
                          project.status === 'in_progress' ? 'bg-blue-500/20 text-blue-300' :
                          'bg-yellow-500/20 text-yellow-300'
                        }`}>
                          {project.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm mb-2">{project.client_name}</p>
                      <p className="text-gray-300 text-sm">{project.description}</p>
                      <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                        <span>Budget: ${project.budget?.toLocaleString() || 0}</span>
                        <span>Progress: {project.progress || 0}%</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* No Data */}
            {!loading && projects.length === 0 && !error && (
              <div className="text-center py-8">
                <p className="text-gray-300">No projects found in the database.</p>
              </div>
            )}

            {/* Test Buttons */}
            <div className="mt-8 flex gap-4">
              <button
                onClick={testConnection}
                className="bg-gradient-to-r from-purple-500 to-magenta-500 text-white px-6 py-3 rounded-lg hover:from-purple-600 hover:to-magenta-600 transition-all duration-300"
              >
                Test Connection Again
              </button>
              
              <a
                href="/admin-dashboard"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                Go to Admin Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 