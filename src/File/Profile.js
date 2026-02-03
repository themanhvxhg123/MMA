import React from 'react';

function Profile() {
  const menuItems = [
    {
      id: 1,
      icon: '/Picture/icon_my_profile_new.png',
      iconType: 'image',
      title: 'My Profile',
      hasArrow: true
    },
    {
      id: 2,
      icon: '/Picture/ic_update_app_profile.svg',
      iconType: 'image',
      title: 'Settings',
      hasArrow: true
    },
    {
      id: 3,
      icon: '/Picture/icon_support_my_profile.png',
      iconType: 'image',
      title: 'Support',
      hasArrow: true
    },
    {
      id: 4,
      icon: '/Picture/icon_faq_my_profile.png',
      iconType: 'image',
      title: 'FAQ',
      hasArrow: true
    },
    {
      id: 5,
      icon: '/Picture/icon_profile_admin.png',
      iconType: 'image',
      title: 'Admin',
      hasArrow: true
    },
    {
      id: 6,
      icon: '/Picture/icon_logout_new.png',
      iconType: 'image',
      title: 'Logout',
      hasArrow: false
    }
  ];

  // Hàm render icon
  const renderIcon = (item) => {
    if (item.iconType === 'image') {
      return <img src={item.icon} alt={item.title} style={{width: '24px', height: '24px'}} />;
    }
    return item.icon;
  };

  return (
    <div className="bg-light min-vh-100" style={{paddingBottom: '80px'}}>
      {/* Header with Avatar */}
      <div className="bg-white">
        {/* Blue Background Banner - DÙNG ẢNH */}
        <div className="position-relative" style={{
          height: '140px',
          overflow: 'hidden'
        }}>
          <img 
            src="/Picture/bg-profile.png" 
            alt="Background" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>

        {/* Avatar */}
        <div className="text-center" style={{marginTop: '-60px', paddingBottom: '20px'}}>
          <div className="position-relative d-inline-block">
            {/* Avatar với chữ K */}
            <div className="rounded-circle d-flex align-items-center justify-content-center" style={{
              width: '120px',
              height: '120px',
              border: '4px solid white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
              background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)'
            }}>
              <span className="text-primary" style={{fontSize: '48px', fontWeight: 'bold'}}>K</span>
            </div>
            {/* Camera Icon */}
            {/* Camera Icon */}
<div className="position-absolute rounded-circle d-flex align-items-center justify-content-center" style={{
  width: '36px',
  height: '36px',
  bottom: '5px',
  right: '5px',
  border: '3px solid white',
  backgroundColor: '#6c757d'
}}>
  <img 
    src="/Picture/ic_upload_camera_avatar_onboarding.svg" 
    alt="Camera" 
    style={{width: '18px', height: '18px'}}
  />
</div>
          </div>
          
          {/* Name and Role */}
          <h5 className="fw-bold mt-3 mb-1">Phạm Quang Khang (KHANGPQ3)</h5>
          <p className="text-secondary small">(BM SE)</p>
        </div>
      </div>

      {/* Menu Items */}
      <div className="bg-white mt-2">
        {menuItems.map((item, index) => (
          <div 
            key={item.id} 
            className={`p-3 d-flex align-items-center ${index < menuItems.length - 1 ? 'border-bottom' : ''}`}
            style={{cursor: 'pointer'}}
          >
            <div className="text-primary me-3" style={{width: '24px', height: '24px'}}>
              {renderIcon(item)}
            </div>
            <span className="flex-grow-1 fw-medium">{item.title}</span>
            {item.hasArrow && (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            )}
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="text-center mt-4 text-secondary small">
        <p className="mb-1">myFPT Version 5.9.10</p>
        <p className="mb-0">Copyright @ FPT Software 2021</p>
      </div>
    </div>
  );
}

export default Profile;