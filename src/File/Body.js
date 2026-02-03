import React from 'react';

function Body({ searchQuery = '', isCollapsed = false }) {
  const features = [
    {
      id: 1,
      icon: '/Picture/approve.png',
      iconType: 'image',
      bgColor: 'bg-primary',
      title: 'Approve Now',
      description: 'Notify managers of pending requests and allow managers to approve/reject requests from internal tools'
    },
    {
      id: 2,
      icon: '/Picture/reward.png',
      iconType: 'image',
      bgColor: 'bg-warning',
      title: 'Reward',
      description: 'Send colleagues a thank you note or reward Gold for exceptional contribution'
    },
    {
      id: 3,
      icon: '/Picture/discip.png',
      iconType: 'image',
      bgColor: 'bg-primary',
      title: 'Discipline',
      description: 'Send a discipline warning to subordinates for violation of codes of conduct'
    },
    {
      id: 4,
      icon: '/Picture/learning.png',
      iconType: 'image',
      bgColor: 'bg-primary',
      title: 'Learning',
      description: 'View a list of mandatory, registered and suggested learning courses; check-in and send feedback for each course'
    },
    {
      id: 5,
      icon: '/Picture/task.png',
      iconType: 'image',
      bgColor: 'bg-warning',
      title: 'My Tasks',
      description: ''
    }
  ];

  const utilities = [
    {
      id: 1,
      icon: '/Picture/fptcare.png',
      iconType: 'image',
      bgColor: 'bg-info',
      title: 'FPT Care',
      description: 'FPT Care'
    },
    {
      id: 2,
      icon: '/Picture/events.png',
      iconType: 'image',
      bgColor: 'bg-warning',
      title: 'Events',
      description: 'Register, check-in, check-out, send feedback to company events and programs'
    },
    {
      id: 3,
      icon: '/Picture/survey.png',
      iconType: 'image',
      bgColor: 'bg-success',
      title: 'Survey',
      description: 'Conduct and collect responses for company-wide or department-wide surveys'
    },
    {
      id: 4,
      icon: '/Picture/img_dating.png',
      iconType: 'image',
      bgColor: 'bg-danger',
      title: 'FPT Dating',
      description: 'Dating feature.'
    },
    {
      id: 5,
      icon: '/Picture/payslip.png',
      iconType: 'image',
      bgColor: 'bg-warning',
      title: 'Payslip',
      description: 'Payslip'
    },
    {
      id: 6,
      icon: '/Picture/birthday.png',
      iconType: 'image',
      bgColor: 'bg-primary',
      title: 'Birthday',
      description: "Your birthday is a special moment. We're very happy to send the best wishes for you. Colleagues can send you birthday wishes on myFPT."
    }
  ];

  const news = [
    {
      id: 1,
      icon: '/Picture/news.png',
      iconType: 'image',
      bgColor: 'bg-primary',
      title: 'News',
      description: 'A collection of latest news and notable events around the company'
    },
    {
      id: 2,
      icon: '/Picture/star.png',
      iconType: 'image',
      bgColor: 'bg-primary',
      title: 'Star Ave',
      description: 'Recognise notable achievements within a business unit or within FPT'
    }
  ];

  const wiki = [
    {
      id: 1,
      icon: '/Picture/employeeinfo.png',
      iconType: 'image',
      bgColor: 'bg-info',
      title: 'Employee Info',
      description: 'Basic, non-confidential employee information (name, gender, department, etc.)'
    }
  ];

  const game = [
    {
      id: 1,
      icon: '/Picture/game.png',
      iconType: 'image',
      bgColor: 'bg-primary',
      title: 'Game',
      description: 'Community-engaging games with Gold as rewards'
    }
  ];

  // Hàm render icon
  const renderIcon = (item) => {
    if (item.iconType === 'image') {
      return <img src={item.icon} alt={item.title} style={{width: '32px', height: '32px'}} />;
    }
    return <span style={{fontSize: '32px'}}>{item.icon}</span>;
  };

  // Hàm filter items theo search query
  const filterItems = (items) => {
    if (!searchQuery.trim()) return items;
    return items.filter(item => 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  };

  // Filter tất cả các danh sách
  const filteredFeatures = filterItems(features);
  const filteredUtilities = filterItems(utilities);
  const filteredNews = filterItems(news);
  const filteredWiki = filterItems(wiki);
  const filteredGame = filterItems(game);

  // Kiểm tra có kết quả không
  const hasResults = filteredFeatures.length > 0 || filteredUtilities.length > 0 || 
                     filteredNews.length > 0 || filteredWiki.length > 0 || filteredGame.length > 0;

  // Component render item dạng GRID (icon tròn + title bên dưới)
  const renderGridItem = (item) => (
    <div key={item.id} className="text-center" style={{cursor: 'pointer'}}>
      <div className={`${item.bgColor} bg-opacity-10 rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2`} style={{width: '60px', height: '60px'}}>
        {renderIcon(item)}
      </div>
      <p className="mb-0 small" style={{fontSize: '12px', lineHeight: '1.3'}}>{item.title}</p>
    </div>
  );

  // Component render item dạng LIST đầy đủ
  const renderListItem = (item, index, totalLength) => (
    <div key={item.id} className={`p-3 ${index < totalLength - 1 ? 'border-bottom' : ''}`}>
      <div className="d-flex align-items-start gap-3">
        <div className={`${item.bgColor} bg-opacity-10 rounded-3 p-2 d-flex align-items-center justify-content-center flex-shrink-0`} style={{width: '40px', height: '40px'}}>
          <img src={item.icon} alt={item.title} style={{width: '24px', height: '24px'}} />
        </div>
        <div className="flex-grow-1">
          <h6 className="mb-1 fw-bold">{item.title}</h6>
          {item.description && (
            <p className="mb-0 text-secondary small" style={{fontSize: '13px'}}>{item.description}</p>
          )}
        </div>
      </div>
    </div>
  );

  // Render section dạng GRID
  const renderGridSection = (items, sectionTitle = null) => {
    if (items.length === 0) return null;
    
    return (
      <>
        {sectionTitle && (
          <div className="px-3 py-2 bg-light">
            <small className="text-secondary" style={{fontSize: '12px', fontWeight: '600'}}>{sectionTitle}</small>
          </div>
        )}
        <div className="bg-white p-3">
          <div className="row row-cols-4 g-3">
            {items.map(item => (
              <div key={item.id} className="col">
                {renderGridItem(item)}
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };

  // Render section dạng LIST
  const renderListSection = (items, sectionTitle = null) => {
    if (items.length === 0) return null;
    
    return (
      <>
        {sectionTitle && (
          <div className="px-3 py-2 bg-light">
            <small className="text-secondary" style={{fontSize: '12px', fontWeight: '600'}}>{sectionTitle}</small>
          </div>
        )}
        <div className="bg-white">
          {items.map((item, index) => renderListItem(item, index, items.length))}
        </div>
      </>
    );
  };

  return (
    <div className="container-fluid px-0" style={{paddingBottom: '80px'}}>
      {/* Hiển thị "No results" nếu không tìm thấy */}
      {!hasResults && searchQuery && (
        <div className="text-center p-5">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-secondary mb-3">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
          <p className="text-secondary">No results found for "{searchQuery}"</p>
        </div>
      )}

      {/* Features */}
      {isCollapsed 
        ? renderGridSection(filteredFeatures)
        : renderListSection(filteredFeatures)
      }

      {/* UTILITIES */}
      {isCollapsed 
        ? renderGridSection(filteredUtilities, 'UTILITIES')
        : renderListSection(filteredUtilities, 'UTILITIES')
      }

      {/* NEWS */}
      {isCollapsed 
        ? renderGridSection(filteredNews, 'NEWS')
        : renderListSection(filteredNews, 'NEWS')
      }

      {/* WIKI */}
      {isCollapsed 
        ? renderGridSection(filteredWiki, 'WIKI')
        : renderListSection(filteredWiki, 'WIKI')
      }

      {/* GAME */}
      {isCollapsed 
        ? renderGridSection(filteredGame, 'GAME')
        : renderListSection(filteredGame, 'GAME')
      }
    </div>
  );
}

export default Body;