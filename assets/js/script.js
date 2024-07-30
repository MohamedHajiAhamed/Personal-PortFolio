const to_top = document.querySelector('.to-top');
const loader = document.querySelector('.loader');
// function toggleDarkMode() {
//   body_dark.classList.toggle('dark');
//   dark.classList.toggle('show');
//   light.classList.toggle('show');
// }
window.addEventListener('load', () => {
  loader.classList.add("disappear");
});
const popover = new bootstrap.Popover('.popover', {
  trigger: 'focus'
})
const popover2 = new bootstrap.Popover('.popover2', {
  trigger: 'focus'
})
window.onload = function () {
  var pageTitle = document.title;
  document.addEventListener('visibilitychange', function (e) {
    if (document.hidden) {
      document.title = "Hey, Come Back!";
    }
    else {
      document.title = pageTitle;
    }
  });

};
var scrollBefore = 0;
const navi = document.querySelector('.nav-bar');
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  if (window.scrollY > 500) {
    if (scrollBefore > scrolled) {
      scrollBefore = scrolled;
      navi.style.position = 'fixed';
    } else {
      scrollBefore = scrolled;
      navi.style.position = 'absolute';
    }
  }
  if (window.scrollY > 50) {
    to_top.classList.add('active');
  } else {
    to_top.classList.remove('active');
  }
  toggle.classList.add('collapsed');
  collapse.classList.remove('show');
  toggle.setAttribute('aria-expanded', 'false');

});
const navLinks = document.querySelectorAll('.nav-link');
const collapse = document.querySelector('.navbar-collapse');
const toggle = document.querySelector('.navbar-toggler');
navLinks.forEach((navLinks) => {
  navLinks.addEventListener('click', () => {
    toggle.classList.add('collapsed');
    collapse.classList.remove('show');
    toggle.setAttribute('aria-expanded', 'false');
    navi.style.position = 'absolute';
  });
});

if (window.outerWidth >= 850) {
  const pcpoint = document.querySelectorAll('.pcpoint');
  const wafafurnworld = document.querySelectorAll('.wafafurnworld');
  const USCarCare = document.querySelectorAll('.USCarCare');
  const prasannabhavan = document.querySelectorAll('.prasannabhavan');
  const stt = document.querySelectorAll('.stt');
  const image_container = document.querySelector('.image-container');
  const img1 = document.querySelector('#img1');
  const img2 = document.querySelector('#img2');
  const close = document.querySelector('.image-container-close');

  pcpoint.forEach((pcpoint) => {
    pcpoint.addEventListener('click', () => {
      image_container.classList.add("active");
      img1.src = "https://i.ibb.co/3v6rCX5/pcpoint1.png";
      img2.src = "https://i.ibb.co/r4R318D/pcpoint2.png";
    });
  });

  wafafurnworld.forEach((wafafurnworld) => {
    wafafurnworld.addEventListener('click', () => {
      image_container.classList.add("active");
      img1.src = "https://i.ibb.co/yF5CjfL/wafafurnworld1.png";
      img2.src = "https://i.ibb.co/Mf1h82M/wafafurnworld2.png";
    });
  });
  USCarCare.forEach((USCarCare) => {
    USCarCare.addEventListener('click', () => {
      image_container.classList.add("active");
      img1.src = "https://i.ibb.co/Bqw1Vs0/us1.png";
      img2.src = "https://i.ibb.co/cL4ZFXP/us2.png";
    });
  });
  prasannabhavan.forEach((prasannabhavan) => {
    prasannabhavan.addEventListener('click', () => {
      image_container.classList.add("active");
      img1.src = "https://i.ibb.co/Q6Z49NT/prasannabhavan1.png";
      img2.src = "https://i.ibb.co/zbdXt15/prasannabhavan2.png";
    });
  });
  stt.forEach((stt) => {
    stt.addEventListener('click', () => {
      image_container.classList.add("active");
      img1.src = "https://i.ibb.co/CwdWQqL/stt1.png";
      img2.src = "https://i.ibb.co/T0nJH44/stt2.png";
    });
  });
  close.addEventListener('click', () => {
    image_container.classList.remove("active");
  });
  image_container.addEventListener('mouseleave', () => {
    image_container.classList.remove("active");
  });
}
else {
  const pcpoint_link1 = document.querySelector('#pcpoint-link1');
  const pcpoint_link2 = document.querySelector('#pcpoint-link2');
  const wafafurnworld_link1 = document.querySelector('#wafafurnworld-link1');
  const wafafurnworld_link2 = document.querySelector('#wafafurnworld-link2');
  const USCarCare_link1 = document.querySelector('#USCarCare-link1');
  const USCarCare_link2 = document.querySelector('#USCarCare-link2');
  const prasannabhavan_link1 = document.querySelector('#prasannabhavan-link1');
  const prasannabhavan_link2 = document.querySelector('#prasannabhavan-link2');
  const stt_link1 = document.querySelector('#stt-link1');
  const stt_link2 = document.querySelector('#stt-link2');

  pcpoint_link1.href = "https://i.ibb.co/3v6rCX5/pcpoint1.png";
  pcpoint_link2.href = "https://i.ibb.co/r4R318D/pcpoint2.png";
  wafafurnworld_link1.href = "https://i.ibb.co/yF5CjfL/wafafurnworld1.png";
  wafafurnworld_link2.href = "https://i.ibb.co/Mf1h82M/wafafurnworld2.png";
  USCarCare_link1.href = "https://i.ibb.co/Bqw1Vs0/us1.png";
  USCarCare_link2.href = "https://i.ibb.co/cL4ZFXP/us2.png";
  prasannabhavan_link1.href = "https://i.ibb.co/Q6Z49NT/prasannabhavan1.png";
  prasannabhavan_link2.href = "https://i.ibb.co/zbdXt15/prasannabhavan2.png";
  stt_link1.href = "https://i.ibb.co/CwdWQqL/stt1.png";
  stt_link2.href = "https://i.ibb.co/T0nJH44/stt2.png";
}

