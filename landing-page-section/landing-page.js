function showSideBar() {
  const displayBar = document.getElementById('sideBar')
  
  const dashBoard = document.getElementById('dash-board');

  const closeIcon = document.getElementById('icon');

  const profilePanel = document.getElementById('profile-panel');

  const openProfile = document.getElementById('open-profile')

  const openCategory = document.getElementById('open-category')

  const closeProfile = document.getElementById('close-profile')

  const overlay = document.getElementById('overlay')

  dashBoard.addEventListener('click', function() {
    displayBar.classList.add('active')
  });

  closeIcon.addEventListener('click', function() {
    displayBar.classList.remove('active')
  });

  openProfile.addEventListener('click', function() {
    profilePanel.classList.add('active');
    sidebar.classList.remove('active');
  });

  openCategory.addEventListener('click', function() {
    displayBar.classList.add('active');
    profilePanel.classList.remove('active');
  });

  closeProfile.addEventListener('click', function() {
    profilePanel.classList.remove('active')
    displayBar.classList.remove('active')
  });
}

showSideBar();