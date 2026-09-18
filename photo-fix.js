(function () {
  const localPhotoQueue = [
    'images/01_maozhu.jpg',
    'images/02_zizhu.jpg',
    'images/03_banzhu.jpg',
    'images/04_cizhu.jpg',
    'images/05_jianzhu.jpg',
    'images/06_ruozhu.jpg',
    'images/07_kuzhu.jpg',
    'images/08_danzhu.jpg',
    'images/09_shuizhu.jpg',
    'images/10_gangzhu.jpg',
    'images/11_guizhu.jpg',
    'images/12_chaganzhu.jpg'
  ];

  function applyPhotoFix() {
    if (!window.bambooData || typeof window.bambooData !== 'object') {
      return false;
    }

    const names = Object.keys(window.bambooData);
    names.forEach((name, index) => {
      const photoUrl = localPhotoQueue[index % localPhotoQueue.length];
      if (window.bambooData[name] && typeof window.bambooData[name] === 'object') {
        window.bambooData[name].photoUrl = photoUrl;
      }
    });

    return true;
  }

  function tryApply() {
    if (applyPhotoFix()) {
      return;
    }
    setTimeout(tryApply, 200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryApply, { once: true });
  } else {
    tryApply();
  }
})();
