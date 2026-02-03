import './App.css';
import { useState } from 'react';
import Body from './File/Body';
import Profile from './File/Profile';

function App() {
  const [currentTab, setCurrentTab] = useState('apps');
  const [searchQuery, setSearchQuery] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-vh-100 bg-light">
      {/* Search Bar - chỉ hiện khi ở tab All Apps */}
      {currentTab === 'apps' && (
        <div className="bg-white border-bottom">
          <div className="container-fluid p-3">
            <div className="d-flex align-items-center gap-2">
              <div className="flex-grow-1 bg-light rounded-3 px-3 py-2 d-flex align-items-center gap-2">
                <svg className="text-secondary" width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="m21 21-4.35-4.35"/>
                </svg>
                <input 
                  type="text" 
                  placeholder="Type feature's name"
                  className="border-0 bg-transparent flex-grow-1"
                  style={{outline: 'none'}}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {/* Clear button khi có text */}
                {searchQuery && (
                  <button 
                    className="btn btn-link p-0 text-secondary"
                    onClick={() => setSearchQuery('')}
                    style={{minWidth: 'auto'}}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                    </svg>
                  </button>
                )}
              </div>
              {/* Nút 3 gạch - Toggle collapse */}
              <button 
                className="btn btn-link p-2 text-secondary text-decoration-none"
                onClick={() => setIsCollapsed(!isCollapsed)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Body Component - hiển thị theo tab */}
      {currentTab === 'apps' && <Body searchQuery={searchQuery} isCollapsed={isCollapsed} />}
      {currentTab === 'profile' && <Profile />}
      {currentTab === 'home' && <div className="p-4 text-center text-secondary">Home Page - Coming Soon</div>}
      {currentTab === 'gold' && <div className="p-4 text-center text-secondary">Gold Page - Coming Soon</div>}
      {currentTab === 'game' && <div className="p-4 text-center text-secondary">Game Page - Coming Soon</div>}

      {/* Bottom Navigation */}
      <div className="fixed-bottom bg-white border-top">
        <div className="d-flex justify-content-around align-items-center py-2">
          <button 
            className={`btn btn-link text-decoration-none ${currentTab === 'home' ? 'text-primary' : 'text-secondary'} d-flex flex-column align-items-center gap-1`}
            style={{fontSize: '11px'}}
            onClick={() => setCurrentTab('home')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            </svg>
            <span className={currentTab === 'home' ? 'fw-semibold' : ''}>Home</span>
          </button>
          <button 
            className={`btn btn-link text-decoration-none ${currentTab === 'apps' ? 'text-primary' : 'text-secondary'} d-flex flex-column align-items-center gap-1`}
            style={{fontSize: '11px'}}
            onClick={() => setCurrentTab('apps')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span className={currentTab === 'apps' ? 'fw-semibold' : ''}>All Apps</span>
          </button>
          <button 
            className={`btn btn-link text-decoration-none ${currentTab === 'gold' ? 'text-primary' : 'text-secondary'} d-flex flex-column align-items-center gap-1`}
            style={{fontSize: '11px'}}
            onClick={() => setCurrentTab('gold')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
            </svg>
            <span className={currentTab === 'gold' ? 'fw-semibold' : ''}>Gold</span>
          </button>
          <button 
            className={`btn btn-link text-decoration-none ${currentTab === 'game' ? 'text-primary' : 'text-secondary'} d-flex flex-column align-items-center gap-1`}
            style={{fontSize: '11px'}}
            onClick={() => setCurrentTab('game')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 6H3V5h18v1zm0 7H3v-1h18v1zm0 7H3v-1h18v1z"/>
            </svg>
            <span className={currentTab === 'game' ? 'fw-semibold' : ''}>Game</span>
          </button>
          <button 
            className={`btn btn-link text-decoration-none ${currentTab === 'profile' ? 'text-primary' : 'text-secondary'} d-flex flex-column align-items-center gap-1`}
            style={{fontSize: '11px'}}
            onClick={() => setCurrentTab('profile')}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="8" r="4"/>
              <path d="M12 14c-6 0-8 4-8 4v2h16v-2s-2-4-8-4z"/>
            </svg>
            <span className={currentTab === 'profile' ? 'fw-semibold' : ''}>Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;