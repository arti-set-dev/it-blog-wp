/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _components_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/burger */ "./src/js/components/burger.js");
  /* harmony import */ var _components_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/validation */ "./src/js/components/validation.js");
  /* harmony import */ var _components_show_title__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/show-title */ "./src/js/components/show-title.js");
  /* harmony import */ var _components_page_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/page-filter */ "./src/js/components/page-filter.js");
  /* harmony import */ var _components_load_more__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/load-more */ "./src/js/components/load-more.js");
  /* harmony import */ var _components_load_more__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_load_more__WEBPACK_IMPORTED_MODULE_4__);
  /* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
  /* harmony import */ var _components_search_posts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/search-posts */ "./src/js/components/search-posts.js");
  
  
  
  
  
  
  
  
  /***/ }),
  
  /***/ "./src/js/_functions.js":
  /*!******************************!*\
    !*** ./src/js/_functions.js ***!
    \******************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _functions_mobile_check__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/mobile-check */ "./src/js/functions/mobile-check.js");
  // Данный файл - лишь собрание подключений готовых компонентов.
  // Рекомендуется создавать отдельный файл в папке components и подключать все там
  // Определение операционной системы на мобильных
   // Определение ширины экрана
  // import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
  // if (isDesktop()) {
  //   console.log('...')
  // }
  // Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
  // import { throttle } from './functions/throttle';
  // let yourFunc = () => { console.log('throttle') };
  // let func = throttle(yourFunc);
  // window.addEventListener('resize', func);
  // Фикс фулскрин-блоков
  // import './functions/fix-fullheight';
  // Реализация бургер-меню
  // import { burger } from './functions/burger';
  // Реализация остановки скролла (не забудьте вызвать функцию)
  // import { disableScroll } from './functions/disable-scroll';
  // Реализация включения скролла (не забудьте вызвать функцию)
  // import { enableScroll } from './functions/enable-scroll';
  // Реализация модального окна
  // import GraphModal from 'graph-modal';
  // const modal = new GraphModal();
  // import ModalWindow from 'r-modalwindow';
  // const modal = new ModalWindow([data-modal]);
  // fslightbox
  // require("fslightbox")
  // const gallery = new FsLightbox();
  // плагин menuAutofocus
  // import MenuAutofocus from 'r-menuautofocus';
  // const menuAutofocus = new MenuAutofocus('[data-burger]');
  // Плагин динамического адаптива
  // import DynamicAdaptive from 'r-dynamicadaptive';
  // const dynamicAdaptive = new DynamicAdaptive('[data-dynamic-state]');
  // Реализация табов
  // import GraphTabs from 'graph-tabs';
  // const tabs = new GraphTabs('tab');
  // Плагин аккордеонов
  // import Accordion from 'r-accordions';
  // const accordionList = new Accordion('.accordion-list');
  // Получение высоты шапки сайта (не забудьте вызвать функцию)
  // import { getHeaderHeight } from './functions/header-height';
  // Подключение плагина кастом-скролла
  // import 'simplebar';
  // Подключение плагина для позиционирования тултипов
  // import { createPopper, right} from '@popperjs/core';
  // createPopper(el, tooltip, {
  //   placement: 'right'
  // });
  // Подключение свайпера
  // import Swiper, { Navigation, Pagination } from 'swiper';
  // Swiper.use([Navigation, Pagination]);
  // const swiper = new Swiper(el, {
  //   slidesPerView: 'auto',
  // });
  // плагин noUislider
  // import noUislider from 'nouislider';
  // const slider = document.querySelector('.slider');
  // noUiSlider.create(slider, {
  //   start: 50,
  //   step: 1,
  //   connect: [true, false],
  //   range: {
  //     'min': 10,
  //     'max': 1000
  //   },
  // });
  // плагин декоративных стрелочек leader-line
  // import LeaderLine from 'leader-line-new';
  // new LeaderLine(
  //   document.getElementById('element-1'),
  //   document.getElementById('element-2')
  // );
  // Подключение анимаций по скроллу
  // import AOS from 'aos';
  // AOS.init();
  // import { animItemsScroll } from './functions/anim-scroll';
  // video.js
  // import videojs from 'video.js';
  // const player = videojs(document.querySelector('.video-js'));
  // Плагин choices.js
  // import Choices from 'choices.js';
  // const element = document.querySelector('.js-choice');
  // const choices = new Choices(element);
  // Подключение параллакса блоков при скролле
  // import Rellax from 'rellax';
  // const rellax = new Rellax('.rellax');
  // Подключение плавной прокрутки к якорям
  // import SmoothScroll from 'smooth-scroll';
  // const scroll = new SmoothScroll('a[href*="#"]');
  // import { smoothSrooll } from './functions/smooth-srooll';
  // Подключение событий свайпа на мобильных
  // import 'swiped-events';
  // document.addEventListener('swiped', function(e) {
  //   console.log(e.target);
  //   console.log(e.detail);
  //   console.log(e.detail.dir);
  // });
  // Удалить ошибки валидации
  // import { removeValidation } from './functions/remove-validation';
  // import { validateForms } from './functions/validate-forms';
  // const rules1 = [...];
  // const afterForm = () => {
  //   console.log('Произошла отправка, тут можно писать любые действия');
  // };
  // validateForms('.form-1', rules1, afterForm);
  
  /***/ }),
  
  /***/ "./src/js/_vars.js":
  /*!*************************!*\
    !*** ./src/js/_vars.js ***!
    \*************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
  /* harmony export */ });
  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    windowEl: window,
    documentEl: document,
    htmlEl: document.documentElement,
    bodyEl: document.body
  });
  
  /***/ }),
  
  /***/ "./src/js/_vendor.js":
  /*!***************************!*\
    !*** ./src/js/_vendor.js ***!
    \***************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/focus-visible.js */ "./src/js/vendor/focus-visible.js");
  /* harmony import */ var _vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor_focus_visible_js__WEBPACK_IMPORTED_MODULE_0__);
  
  
  /***/ }),
  
  /***/ "./src/js/components/burger.js":
  /*!*************************************!*\
    !*** ./src/js/components/burger.js ***!
    \*************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _functions_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/burger */ "./src/js/functions/burger.js");
  
  
  /***/ }),
  
  /***/ "./src/js/components/load-more.js":
  /*!****************************************!*\
    !*** ./src/js/components/load-more.js ***!
    \****************************************/
  /***/ (() => {
  
  const ajaxLoadMore = () => {
    const button = document.querySelector('.load-more');
    button === null || button === void 0 ? void 0 : button.addEventListener('click', e => {
      let current_page = document.querySelector('.blog-wrapper__list').dataset.page;
      let max_pages = document.querySelector('.blog-wrapper__list').dataset.max;
      let name_cat = document.querySelector('.blog-wrapper__list').dataset.name;
      let search_value = document.querySelector('.blog-wrapper__list').dataset.value;
      button.querySelector('span').textContent = 'Загрузка';
      button.classList.add('load-more--loading');
      let params = new URLSearchParams();
      params.append('action', 'load_more_posts');
      params.append('current_page', current_page);
      params.append('max_pages', max_pages);
      params.append('name_cat', name_cat);
      params.append('search_value', search_value);
      fetch('/wp-admin/admin-ajax.php', {
        method: 'POST',
        body: params
      }).then(response => response.json()).then(data => {
        let posts_list = document.querySelector('.blog-wrapper__list');
        posts_list.innerHTML += data.data;
        button.querySelector('span').textContent = 'Загрузить ещё';
        button.classList.remove('load-more--loading'); // let getUrl = window.location;
        // let baseUrl = getUrl.protocol + "//" + getUrl.host + "/";
        // window.history.pushState('', '', baseUrl + 'page/' + (parseInt(document.querySelector('.blog-wrapper__list').dataset.page) + 1));
  
        document.querySelector('.blog-wrapper__list').dataset.page++;
  
        if (document.querySelector('.blog-wrapper__list').dataset.page == document.querySelector('.blog-wrapper__list').dataset.max) {
          button.parentNode.removeChild(button);
        }
      });
    });
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    ajaxLoadMore();
  });
  
  /***/ }),
  
  /***/ "./src/js/components/modal.js":
  /*!************************************!*\
    !*** ./src/js/components/modal.js ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var r_modalwindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! r-modalwindow */ "./node_modules/r-modalwindow/src/modalwindow.js");
  
  const modal = new r_modalwindow__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-modal]');
  
  /***/ }),
  
  /***/ "./src/js/components/page-filter.js":
  /*!******************************************!*\
    !*** ./src/js/components/page-filter.js ***!
    \******************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ PageFilter)
  /* harmony export */ });
  class PageFilter {
    constructor(selector, options) {
      let defaultOptions = {
        childClass: 'filter-element',
        highlightClass: 'filter-highlight',
        hiddenClass: 'filter-hidden',
        onInput: () => {}
      };
      this.options = Object.assign(defaultOptions, options);
      this.input = document.querySelector(selector);
      this.rex = /(<span.+?>)(.+?)(<\/span>)/g;
      this.rexAtt = 'gi';
      this.event();
    }
  
    event() {
      if (this.input) {
        this.input.addEventListener('input', e => {
          var _this$input, _this$itemsParent;
  
          this.itemsParent = document.querySelector(`[data-items-target="${(_this$input = this.input) === null || _this$input === void 0 ? void 0 : _this$input.dataset.items}"]`);
          this.items = (_this$itemsParent = this.itemsParent) === null || _this$itemsParent === void 0 ? void 0 : _this$itemsParent.querySelectorAll(`.${this.options.childClass}`);
  
          if (e.which && e.which === 13 || e.keyCode && e.keyCode === 13) {
            return false;
          } else {
            let filterText = e.currentTarget.value;
  
            if (filterText.length && this.items) {
              this.clear();
              [].filter.call(this.items, item => {
                if (item.textContent.toUpperCase().includes(filterText.toUpperCase())) {
                  let newHtml = item.textContent;
                  item.innerHTML = newHtml.replace(new RegExp(filterText, this.rexAtt), match => {
                    return [`<span class="${this.options.highlightClass}">${match}</span>`].join("");
                  });
                } else {
                  item.classList.add(this.options.hiddenClass);
                }
              });
            } else {
              this.clear();
            }
          }
  
          this.options.onInput(this);
        });
      }
    }
  
    clear() {
      var _this$items;
  
      (_this$items = this.items) === null || _this$items === void 0 ? void 0 : _this$items.forEach(item => {
        item.classList.remove(this.options.hiddenClass);
        item.innerHTML = `${item.innerHTML.replace(new RegExp(this.rex), "$2")}`;
      });
    }
  
  } // const filter = new PageFilter('.search-panel__input');
  
  /***/ }),
  
  /***/ "./src/js/components/search-posts.js":
  /*!*******************************************!*\
    !*** ./src/js/components/search-posts.js ***!
    \*******************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _components_page_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/page-filter */ "./src/js/components/page-filter.js");
  
  document.addEventListener("DOMContentLoaded", function () {
    var _document, _document2;
  
    const search_input = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(".search-panel__input");
    const search_results = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector(".search-panel__list");
    search_results.innerHTML = '';
    search_input === null || search_input === void 0 ? void 0 : search_input.addEventListener("keyup", function () {
      let search_value = this.value;
  
      if (search_value.length > 2) {
        fetch("/wp-admin/admin-ajax.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: "action=ajax_search&term=" + search_value
        }).then(response => response.text()).then(data => {
          search_results.classList.add('search-panel__list--show');
          search_results.innerHTML = data.slice(0, -1);
        });
      } else {
        search_results.classList.remove('search-panel__list--show');
      }
    });
    document.addEventListener("mouseup", function (e) {
      if (!(search_input !== null && search_input !== void 0 && search_input.contains(e.target)) && !(search_results !== null && search_results !== void 0 && search_results.contains(e.target))) {
        search_results === null || search_results === void 0 ? void 0 : search_results.classList.remove('search-panel__list--show');
      }
    });
  });
  
  /***/ }),
  
  /***/ "./src/js/components/show-title.js":
  /*!*****************************************!*\
    !*** ./src/js/components/show-title.js ***!
    \*****************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "showTitle": () => (/* binding */ showTitle)
  /* harmony export */ });
  const showTitle = () => {
    const posts = document.querySelectorAll('.post, .popular-news__post');
    posts === null || posts === void 0 ? void 0 : posts.forEach(post => {
      var _post$querySelector, _post$querySelector2;
  
      const postTitle = post === null || post === void 0 ? void 0 : post.querySelector('.title');
      const psotParagraph = post === null || post === void 0 ? void 0 : post.querySelector('.text');
      const psotParagraphText = post === null || post === void 0 ? void 0 : (_post$querySelector = post.querySelector('.text')) === null || _post$querySelector === void 0 ? void 0 : _post$querySelector.innerText;
      const postTitleText = post === null || post === void 0 ? void 0 : (_post$querySelector2 = post.querySelector('.title')) === null || _post$querySelector2 === void 0 ? void 0 : _post$querySelector2.innerText;
      postTitle === null || postTitle === void 0 ? void 0 : postTitle.setAttribute('title', postTitleText);
      psotParagraph === null || psotParagraph === void 0 ? void 0 : psotParagraph.setAttribute('title', psotParagraphText);
    });
  };
  document.addEventListener('DOMContentLoaded', () => {
    showTitle();
  });
  
  /***/ }),
  
  /***/ "./src/js/components/validation.js":
  /*!*****************************************!*\
    !*** ./src/js/components/validation.js ***!
    \*****************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _functions_after_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/after-form */ "./src/js/functions/after-form.js");
  /* harmony import */ var _functions_validate_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/validate-forms */ "./src/js/functions/validate-forms.js");
  /* harmony import */ var _functions_validation_rules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../functions/validation-rules */ "./src/js/functions/validation-rules.js");
  
  
  
  (0,_functions_validate_forms__WEBPACK_IMPORTED_MODULE_1__.validateForms)('.feedback', _functions_validation_rules__WEBPACK_IMPORTED_MODULE_2__.feedbackRule, _functions_after_form__WEBPACK_IMPORTED_MODULE_0__.afterForm);
  (0,_functions_validate_forms__WEBPACK_IMPORTED_MODULE_1__.validateForms)('.subscription', _functions_validation_rules__WEBPACK_IMPORTED_MODULE_2__.subscriptionRule, _functions_after_form__WEBPACK_IMPORTED_MODULE_0__.afterForm);
  
  /***/ }),
  
  /***/ "./src/js/functions/after-form.js":
  /*!****************************************!*\
    !*** ./src/js/functions/after-form.js ***!
    \****************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "afterForm": () => (/* binding */ afterForm)
  /* harmony export */ });
  const afterForm = () => {
    console.log('Произошла отправка');
  };
  
  /***/ }),
  
  /***/ "./src/js/functions/burger.js":
  /*!************************************!*\
    !*** ./src/js/functions/burger.js ***!
    \************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ "./src/js/functions/disable-scroll.js");
  /* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ "./src/js/functions/enable-scroll.js");
  
  
  
  (function () {
    var _document, _document2, _document3, _document4;
  
    const burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');
    const menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');
    const menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');
    const overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');
    burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', e => {
      burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');
      menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');
  
      if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');
        overlay === null || overlay === void 0 ? void 0 : overlay.classList.add('overlay--show');
        (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();
      } else {
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
        burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
        overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('overlay--show');
        (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
      }
    });
    overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', () => {
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
      burger === null || burger === void 0 ? void 0 : burger.classList.remove('burger--active');
      menu === null || menu === void 0 ? void 0 : menu.classList.remove('menu--active');
      overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('overlay--show');
      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
    });
    menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(el => {
      el.addEventListener('click', () => {
        if (burger !== null && burger !== void 0 && burger.classList.contains('burger--active')) {
          burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');
          burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');
          burger === null || burger === void 0 ? void 0 : burger.classList.remove('burger--active');
          menu === null || menu === void 0 ? void 0 : menu.classList.remove('menu--active');
          overlay === null || overlay === void 0 ? void 0 : overlay.classList.remove('overlay--show');
          (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();
        }
      });
    });
  })();
  
  /***/ }),
  
  /***/ "./src/js/functions/disable-scroll.js":
  /*!********************************************!*\
    !*** ./src/js/functions/disable-scroll.js ***!
    \********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "disableScroll": () => (/* binding */ disableScroll)
  /* harmony export */ });
  /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");
  
  const disableScroll = () => {
    var _document;
  
    const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
    const pagePosition = window.scrollY;
    const paddingOffset = `${window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.offsetWidth}px`;
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.style.scrollBehavior = 'none';
    fixBlocks.forEach(el => {
      el.style.paddingRight = paddingOffset;
    });
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = paddingOffset;
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.add('dis-scroll');
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position = pagePosition;
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = `-${pagePosition}px`;
  };
  
  /***/ }),
  
  /***/ "./src/js/functions/enable-scroll.js":
  /*!*******************************************!*\
    !*** ./src/js/functions/enable-scroll.js ***!
    \*******************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "enableScroll": () => (/* binding */ enableScroll)
  /* harmony export */ });
  /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");
  
  const enableScroll = () => {
    var _document;
  
    const fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');
    const body = document.body;
    const pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.dataset.position, 10);
    fixBlocks.forEach(el => {
      el.style.paddingRight = '0px';
    });
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.paddingRight = '0px';
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.style.top = 'auto';
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.classList.remove('dis-scroll');
    window.scroll({
      top: pagePosition,
      left: 0
    });
    _vars__WEBPACK_IMPORTED_MODULE_0__["default"].bodyEl.removeAttribute('data-position');
  };
  
  /***/ }),
  
  /***/ "./src/js/functions/mobile-check.js":
  /*!******************************************!*\
    !*** ./src/js/functions/mobile-check.js ***!
    \******************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "mobileCheck": () => (/* binding */ mobileCheck)
  /* harmony export */ });
  /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ "./src/js/_vars.js");
  
  const mobileCheck = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  
    if (/android/i.test(userAgent)) {
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--android');
      return "Android";
    }
  
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      _vars__WEBPACK_IMPORTED_MODULE_0__["default"].htmlEl.classList.add('page--ios');
      return "iOS";
    }
  
    return "unknown";
  };
  
  /***/ }),
  
  /***/ "./src/js/functions/validate-forms.js":
  /*!********************************************!*\
    !*** ./src/js/functions/validate-forms.js ***!
    \********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "validateForms": () => (/* binding */ validateForms)
  /* harmony export */ });
  /* harmony import */ var just_validate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! just-validate */ "./node_modules/just-validate/dist/just-validate.es.js");
  /* harmony import */ var r_phonemask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! r-phonemask */ "./node_modules/r-phonemask/src/phonemask.js");
   // import Inputmask from "inputmask";
  
  
  const validateForms = (selector, rules, afterSend) => {
    var _document;
  
    const form = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector(selector);
    const telSelector = form === null || form === void 0 ? void 0 : form.querySelector('input[type="tel"]');
  
    if (!form) {
      return false;
    }
  
    if (!rules) {
      console.error('Вы не передали правила валидации!');
      return false;
    }
  
    if (telSelector) {
      // const inputMask = new Inputmask('+7 (999) 999-99-99');
      // inputMask.mask(telSelector);
      const maskPhone = new r_phonemask__WEBPACK_IMPORTED_MODULE_1__["default"]('.tel');
  
      for (let item of rules) {
        if (item.tel) {
          item.rules.push({
            rule: 'function',
            validator: function () {
              // const phone = telSelector.inputmask.unmaskedvalue();
              // return phone.length === 10;
              const phone = form.querySelector('.tel');
              let length;
  
              if (phone.getAttribute('maxlength') == 18) {
                length = 18;
              }
  
              if (phone.getAttribute('maxlength') == 17) {
                length = 17;
              }
  
              if (phone.getAttribute('maxlength') == 13) {
                length = 13;
              }
  
              return phone.value.length === length;
            },
            errorMessage: item.telError
          });
        }
      }
    }
  
    const validation = new just_validate__WEBPACK_IMPORTED_MODULE_0__["default"](selector);
  
    for (let item of rules) {
      validation.addField(item.ruleSelector, item.rules);
    }
  
    validation.onSuccess(ev => {
      let formData = new FormData(ev.target);
      let action = ev.target.getAttribute('action');
      let xhr = new XMLHttpRequest();
  
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            if (afterSend) {
              afterSend();
            }
          }
        }
      };
  
      xhr.open('POST', action, true);
      xhr.send(formData);
      ev.target.reset();
    });
  };
  
  /***/ }),
  
  /***/ "./src/js/functions/validation-rules.js":
  /*!**********************************************!*\
    !*** ./src/js/functions/validation-rules.js ***!
    \**********************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "feedbackRule": () => (/* binding */ feedbackRule),
  /* harmony export */   "subscriptionRule": () => (/* binding */ subscriptionRule)
  /* harmony export */ });
  const feedbackRule = [{
    ruleSelector: '.input--name',
    rules: [{
      rule: 'required'
    }]
  }, {
    ruleSelector: '.input--email',
    rules: [{
      rule: 'required'
    }, {
      rule: 'email',
      value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    }]
  }];
  const subscriptionRule = [{
    ruleSelector: '.input--email',
    rules: [{
      rule: 'required'
    }, {
      rule: 'email',
      value: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
    }]
  }];
  
  /***/ }),
  
  /***/ "./src/js/vendor/focus-visible.js":
  /*!****************************************!*\
    !*** ./src/js/vendor/focus-visible.js ***!
    \****************************************/
  /***/ (() => {
  
  /**
   * Applies the :focus-visible polyfill at the given scope.
   * A scope in this case is either the top-level Document or a Shadow Root.
   *
   * @param {(Document|ShadowRoot)} scope
   * @see https://github.com/WICG/focus-visible
   */
  function applyFocusVisiblePolyfill(scope) {
    var hadKeyboardEvent = true;
    var hadFocusVisibleRecently = false;
    var hadFocusVisibleRecentlyTimeout = null;
    var inputTypesAllowlist = {
      text: true,
      search: true,
      url: true,
      tel: true,
      email: true,
      password: true,
      number: true,
      date: true,
      month: true,
      week: true,
      time: true,
      datetime: true,
      'datetime-local': true
    };
    /**
     * Helper function for legacy browsers and iframes which sometimes focus
     * elements like document, body, and non-interactive SVG.
     * @param {Element} el
     */
  
    function isValidFocusTarget(el) {
      if (el && el !== document && el.nodeName !== 'HTML' && el.nodeName !== 'BODY' && 'classList' in el && 'contains' in el.classList) {
        return true;
      }
  
      return false;
    }
    /**
     * Computes whether the given element should automatically trigger the
     * `focus-visible` class being added, i.e. whether it should always match
     * `:focus-visible` when focused.
     * @param {Element} el
     * @return {boolean}
     */
  
  
    function focusTriggersKeyboardModality(el) {
      var type = el.type;
      var tagName = el.tagName;
  
      if (tagName === 'INPUT' && inputTypesAllowlist[type] && !el.readOnly) {
        return true;
      }
  
      if (tagName === 'TEXTAREA' && !el.readOnly) {
        return true;
      }
  
      if (el.isContentEditable) {
        return true;
      }
  
      return false;
    }
    /**
     * Add the `focus-visible` class to the given element if it was not added by
     * the author.
     * @param {Element} el
     */
  
  
    function addFocusVisibleClass(el) {
      if (el.classList.contains('focus-visible')) {
        return;
      }
  
      el.classList.add('focus-visible');
      el.setAttribute('data-focus-visible-added', '');
    }
    /**
     * Remove the `focus-visible` class from the given element if it was not
     * originally added by the author.
     * @param {Element} el
     */
  
  
    function removeFocusVisibleClass(el) {
      if (!el.hasAttribute('data-focus-visible-added')) {
        return;
      }
  
      el.classList.remove('focus-visible');
      el.removeAttribute('data-focus-visible-added');
    }
    /**
     * If the most recent user interaction was via the keyboard;
     * and the key press did not include a meta, alt/option, or control key;
     * then the modality is keyboard. Otherwise, the modality is not keyboard.
     * Apply `focus-visible` to any current active element and keep track
     * of our keyboard modality state with `hadKeyboardEvent`.
     * @param {KeyboardEvent} e
     */
  
  
    function onKeyDown(e) {
      if (e.metaKey || e.altKey || e.ctrlKey) {
        return;
      }
  
      if (isValidFocusTarget(scope.activeElement)) {
        addFocusVisibleClass(scope.activeElement);
      }
  
      hadKeyboardEvent = true;
    }
    /**
     * If at any point a user clicks with a pointing device, ensure that we change
     * the modality away from keyboard.
     * This avoids the situation where a user presses a key on an already focused
     * element, and then clicks on a different element, focusing it with a
     * pointing device, while we still think we're in keyboard modality.
     * @param {Event} e
     */
  
  
    function onPointerDown(e) {
      hadKeyboardEvent = false;
    }
    /**
     * On `focus`, add the `focus-visible` class to the target if:
     * - the target received focus as a result of keyboard navigation, or
     * - the event target is an element that will likely require interaction
     *   via the keyboard (e.g. a text box)
     * @param {Event} e
     */
  
  
    function onFocus(e) {
      // Prevent IE from focusing the document or HTML element.
      if (!isValidFocusTarget(e.target)) {
        return;
      }
  
      if (hadKeyboardEvent || focusTriggersKeyboardModality(e.target)) {
        addFocusVisibleClass(e.target);
      }
    }
    /**
     * On `blur`, remove the `focus-visible` class from the target.
     * @param {Event} e
     */
  
  
    function onBlur(e) {
      if (!isValidFocusTarget(e.target)) {
        return;
      }
  
      if (e.target.classList.contains('focus-visible') || e.target.hasAttribute('data-focus-visible-added')) {
        // To detect a tab/window switch, we look for a blur event followed
        // rapidly by a visibility change.
        // If we don't see a visibility change within 100ms, it's probably a
        // regular focus change.
        hadFocusVisibleRecently = true;
        window.clearTimeout(hadFocusVisibleRecentlyTimeout);
        hadFocusVisibleRecentlyTimeout = window.setTimeout(function () {
          hadFocusVisibleRecently = false;
        }, 100);
        removeFocusVisibleClass(e.target);
      }
    }
    /**
     * If the user changes tabs, keep track of whether or not the previously
     * focused element had .focus-visible.
     * @param {Event} e
     */
  
  
    function onVisibilityChange(e) {
      if (document.visibilityState === 'hidden') {
        // If the tab becomes active again, the browser will handle calling focus
        // on the element (Safari actually calls it twice).
        // If this tab change caused a blur on an element with focus-visible,
        // re-apply the class when the user switches back to the tab.
        if (hadFocusVisibleRecently) {
          hadKeyboardEvent = true;
        }
  
        addInitialPointerMoveListeners();
      }
    }
    /**
     * Add a group of listeners to detect usage of any pointing devices.
     * These listeners will be added when the polyfill first loads, and anytime
     * the window is blurred, so that they are active when the window regains
     * focus.
     */
  
  
    function addInitialPointerMoveListeners() {
      document.addEventListener('mousemove', onInitialPointerMove);
      document.addEventListener('mousedown', onInitialPointerMove);
      document.addEventListener('mouseup', onInitialPointerMove);
      document.addEventListener('pointermove', onInitialPointerMove);
      document.addEventListener('pointerdown', onInitialPointerMove);
      document.addEventListener('pointerup', onInitialPointerMove);
      document.addEventListener('touchmove', onInitialPointerMove);
      document.addEventListener('touchstart', onInitialPointerMove);
      document.addEventListener('touchend', onInitialPointerMove);
    }
  
    function removeInitialPointerMoveListeners() {
      document.removeEventListener('mousemove', onInitialPointerMove);
      document.removeEventListener('mousedown', onInitialPointerMove);
      document.removeEventListener('mouseup', onInitialPointerMove);
      document.removeEventListener('pointermove', onInitialPointerMove);
      document.removeEventListener('pointerdown', onInitialPointerMove);
      document.removeEventListener('pointerup', onInitialPointerMove);
      document.removeEventListener('touchmove', onInitialPointerMove);
      document.removeEventListener('touchstart', onInitialPointerMove);
      document.removeEventListener('touchend', onInitialPointerMove);
    }
    /**
     * When the polfyill first loads, assume the user is in keyboard modality.
     * If any event is received from a pointing device (e.g. mouse, pointer,
     * touch), turn off keyboard modality.
     * This accounts for situations where focus enters the page from the URL bar.
     * @param {Event} e
     */
  
  
    function onInitialPointerMove(e) {
      // Work around a Safari quirk that fires a mousemove on <html> whenever the
      // window blurs, even if you're tabbing out of the page. ¯\_(ツ)_/¯
      if (e.target.nodeName && e.target.nodeName.toLowerCase() === 'html') {
        return;
      }
  
      hadKeyboardEvent = false;
      removeInitialPointerMoveListeners();
    } // For some kinds of state, we are interested in changes at the global scope
    // only. For example, global pointer input, global key presses and global
    // visibility change should affect the state at every scope:
  
  
    document.addEventListener('keydown', onKeyDown, true);
    document.addEventListener('mousedown', onPointerDown, true);
    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('touchstart', onPointerDown, true);
    document.addEventListener('visibilitychange', onVisibilityChange, true);
    addInitialPointerMoveListeners(); // For focus and blur, we specifically care about state changes in the local
    // scope. This is because focus / blur events that originate from within a
    // shadow root are not re-dispatched from the host element if it was already
    // the active element in its own scope:
  
    scope.addEventListener('focus', onFocus, true);
    scope.addEventListener('blur', onBlur, true); // We detect that a node is a ShadowRoot by ensuring that it is a
    // DocumentFragment and also has a host property. This check covers native
    // implementation and polyfill implementation transparently. If we only cared
    // about the native implementation, we could just check if the scope was
    // an instance of a ShadowRoot.
  
    if (scope.nodeType === Node.DOCUMENT_FRAGMENT_NODE && scope.host) {
      // Since a ShadowRoot is a special kind of DocumentFragment, it does not
      // have a root element to add a class to. So, we add this attribute to the
      // host element instead:
      scope.host.setAttribute('data-js-focus-visible', '');
    } else if (scope.nodeType === Node.DOCUMENT_NODE) {
      document.documentElement.classList.add('js-focus-visible');
      document.documentElement.setAttribute('data-js-focus-visible', '');
    }
  } // It is important to wrap all references to global window and document in
  // these checks to support server-side rendering use cases
  // @see https://github.com/WICG/focus-visible/issues/199
  
  
  if (typeof window !== 'undefined' && typeof document !== 'undefined') {
    // Make the polyfill helper globally available. This can be used as a signal
    // to interested libraries that wish to coordinate with the polyfill for e.g.,
    // applying the polyfill to a shadow root:
    window.applyFocusVisiblePolyfill = applyFocusVisiblePolyfill; // Notify interested libraries of the polyfill's presence, in case the
    // polyfill was loaded lazily:
  
    var event;
  
    try {
      event = new CustomEvent('focus-visible-polyfill-ready');
    } catch (error) {
      // IE11 does not support using CustomEvent as a constructor directly:
      event = document.createEvent('CustomEvent');
      event.initCustomEvent('focus-visible-polyfill-ready', false, false, {});
    }
  
    window.dispatchEvent(event);
  }
  
  if (typeof document !== 'undefined') {
    // Apply the polyfill to the global document, so that no JavaScript
    // coordination is required to use the polyfill in the top-level document:
    applyFocusVisiblePolyfill(document);
  }
  
  /***/ }),
  
  /***/ "./node_modules/just-validate/dist/just-validate.es.js":
  /*!*************************************************************!*\
    !*** ./node_modules/just-validate/dist/just-validate.es.js ***!
    \*************************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ JustValidate)
  /* harmony export */ });
  var __defProp = Object.defineProperty;
  var __getOwnPropSymbols = Object.getOwnPropertySymbols;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __propIsEnum = Object.prototype.propertyIsEnumerable;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __spreadValues = (a, b) => {
    for (var prop in b || (b = {}))
      if (__hasOwnProp.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    if (__getOwnPropSymbols)
      for (var prop of __getOwnPropSymbols(b)) {
        if (__propIsEnum.call(b, prop))
          __defNormalProp(a, prop, b[prop]);
      }
    return a;
  };
  var __publicField = (obj, key, value) => {
    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
    return value;
  };
  const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const NUMBER_REGEXP = /^[0-9]+$/;
  const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const STRONG_PASSWORD_REGEXP = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  const isEmpty = (value) => {
    let newVal = value;
    if (typeof value === "string") {
      newVal = value.trim();
    }
    return !newVal;
  };
  const isEmail = (value) => {
    return EMAIL_REGEXP.test(value);
  };
  const isLengthMoreThanMax = (value, len) => {
    return value.length > len;
  };
  const isLengthLessThanMin = (value, len) => {
    return value.length < len;
  };
  const isNumber = (value) => {
    return NUMBER_REGEXP.test(value);
  };
  const isPassword = (value) => {
    return PASSWORD_REGEXP.test(value);
  };
  const isStrongPassword = (value) => {
    return STRONG_PASSWORD_REGEXP.test(value);
  };
  const isNumberMoreThanMax = (value, len) => {
    return value > len;
  };
  const isNumberLessThanMin = (value, len) => {
    return value < len;
  };
  var Rules = /* @__PURE__ */ ((Rules2) => {
    Rules2["Required"] = "required";
    Rules2["Email"] = "email";
    Rules2["MinLength"] = "minLength";
    Rules2["MaxLength"] = "maxLength";
    Rules2["Password"] = "password";
    Rules2["Number"] = "number";
    Rules2["MaxNumber"] = "maxNumber";
    Rules2["MinNumber"] = "minNumber";
    Rules2["StrongPassword"] = "strongPassword";
    Rules2["CustomRegexp"] = "customRegexp";
    Rules2["MinFilesCount"] = "minFilesCount";
    Rules2["MaxFilesCount"] = "maxFilesCount";
    Rules2["Files"] = "files";
    return Rules2;
  })(Rules || {});
  var GroupRules = /* @__PURE__ */ ((GroupRules2) => {
    GroupRules2["Required"] = "required";
    return GroupRules2;
  })(GroupRules || {});
  var CustomStyleTagIds = /* @__PURE__ */ ((CustomStyleTagIds2) => {
    CustomStyleTagIds2["Label"] = "label";
    CustomStyleTagIds2["LabelArrow"] = "labelArrow";
    return CustomStyleTagIds2;
  })(CustomStyleTagIds || {});
  const getDefaultFieldMessage = (rule, ruleValue) => {
    switch (rule) {
      case Rules.Required:
        return "The field is required";
      case Rules.Email:
        return "Email has invalid format";
      case Rules.MaxLength:
        return "The field must contain a maximum of :value characters".replace(":value", String(ruleValue));
      case Rules.MinLength:
        return "The field must contain a minimum of :value characters".replace(":value", String(ruleValue));
      case Rules.Password:
        return "Password must contain minimum eight characters, at least one letter and one number";
      case Rules.Number:
        return "Value should be a number";
      case Rules.StrongPassword:
        return "Password should contain minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character";
      case Rules.MaxNumber:
        return "Number should be less or equal than :value".replace(":value", String(ruleValue));
      case Rules.MinNumber:
        return "Number should be more or equal than :value".replace(":value", String(ruleValue));
      case Rules.MinFilesCount:
        return "Files count should be more or equal than :value".replace(":value", String(ruleValue));
      case Rules.MaxFilesCount:
        return "Files count should be less or equal than :value".replace(":value", String(ruleValue));
      case Rules.Files:
        return "Uploaded files have one or several invalid properties (extension/size/type etc)";
      default:
        return "Value is incorrect";
    }
  };
  const getDefaultGroupMessage = (rule) => {
    switch (rule) {
      case GroupRules.Required:
        return "The field is required";
      default:
        return "Group is incorrect";
    }
  };
  const isPromise = (val) => !!val && typeof val.then === "function";
  const getNodeParents = (el) => {
    let elem = el;
    const els = [];
    while (elem) {
      els.unshift(elem);
      elem = elem.parentNode;
    }
    return els;
  };
  const getClosestParent = (groups, parents) => {
    const reversedParents = [...parents].reverse();
    for (let i = 0, len = reversedParents.length; i < len; ++i) {
      const parent = reversedParents[i];
      for (const key in groups) {
        const group = groups[key];
        if (group.groupElem === parent) {
          return [key, group];
        }
      }
    }
    return null;
  };
  const getClassList = (classList) => {
    if (Array.isArray(classList)) {
      return classList.filter((cls) => cls.length > 0);
    }
    if (typeof classList === "string" && classList.trim()) {
      return [...classList.split(" ").filter((cls) => cls.length > 0)];
    }
    return [];
  };
  const errorLabelCss = `.just-validate-error-label[data-tooltip=true]{position:fixed;padding:4px 8px;background:#423f3f;color:#fff;white-space:nowrap;z-index:10;border-radius:4px;transform:translateY(-5px)}.just-validate-error-label[data-tooltip=true]:before{content:'';width:0;height:0;border-left:solid 5px transparent;border-right:solid 5px transparent;border-bottom:solid 5px #423f3f;position:absolute;z-index:3;display:block;bottom:-5px;transform:rotate(180deg);left:calc(50% - 5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]{transform:translateX(-5px)}.just-validate-error-label[data-tooltip=true][data-direction=left]:before{right:-7px;bottom:auto;left:auto;top:calc(50% - 2px);transform:rotate(90deg)}.just-validate-error-label[data-tooltip=true][data-direction=right]{transform:translateX(5px)}.just-validate-error-label[data-tooltip=true][data-direction=right]:before{right:auto;bottom:auto;left:-7px;top:calc(50% - 2px);transform:rotate(-90deg)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]{transform:translateY(5px)}.just-validate-error-label[data-tooltip=true][data-direction=bottom]:before{right:auto;bottom:auto;left:calc(50% - 5px);top:-5px;transform:rotate(0)}`;
  const TOOLTIP_ARROW_HEIGHT = 5;
  const defaultGlobalConfig = {
    errorFieldStyle: {
      color: "#b81111",
      border: "1px solid #B81111"
    },
    errorFieldCssClass: "just-validate-error-field",
    successFieldCssClass: "just-validate-success-field",
    errorLabelStyle: {
      color: "#b81111"
    },
    errorLabelCssClass: "just-validate-error-label",
    successLabelCssClass: "just-validate-success-label",
    focusInvalidField: true,
    lockForm: true,
    testingMode: false
  };
  class JustValidate {
    constructor(form, globalConfig, dictLocale) {
      __publicField(this, "form", null);
      __publicField(this, "fields", {});
      __publicField(this, "groupFields", {});
      __publicField(this, "errors", {});
      __publicField(this, "isValid", false);
      __publicField(this, "isSubmitted", false);
      __publicField(this, "globalConfig", defaultGlobalConfig);
      __publicField(this, "errorLabels", {});
      __publicField(this, "successLabels", {});
      __publicField(this, "eventListeners", []);
      __publicField(this, "dictLocale", []);
      __publicField(this, "currentLocale");
      __publicField(this, "customStyleTags", {});
      __publicField(this, "onSuccessCallback");
      __publicField(this, "onFailCallback");
      __publicField(this, "tooltips", []);
      __publicField(this, "lastScrollPosition");
      __publicField(this, "isScrollTick");
      __publicField(this, "refreshAllTooltips", () => {
        this.tooltips.forEach((item) => {
          item.refresh();
        });
      });
      __publicField(this, "handleDocumentScroll", () => {
        this.lastScrollPosition = window.scrollY;
        if (!this.isScrollTick) {
          window.requestAnimationFrame(() => {
            this.refreshAllTooltips();
            this.isScrollTick = false;
          });
          this.isScrollTick = true;
        }
      });
      __publicField(this, "formSubmitHandler", (ev) => {
        ev.preventDefault();
        this.isSubmitted = true;
        this.validateHandler(ev);
      });
      __publicField(this, "handleFieldChange", (target) => {
        let currentFieldName;
        for (const fieldName in this.fields) {
          const field = this.fields[fieldName];
          if (field.elem === target) {
            currentFieldName = fieldName;
            break;
          }
        }
        if (!currentFieldName) {
          return;
        }
        this.validateField(currentFieldName, true);
      });
      __publicField(this, "handleGroupChange", (target) => {
        let currentGroup;
        let currentGroupName;
        for (const groupName in this.groupFields) {
          const group = this.groupFields[groupName];
          if (group.elems.find((elem) => elem === target)) {
            currentGroup = group;
            currentGroupName = groupName;
            break;
          }
        }
        if (!currentGroup || !currentGroupName) {
          return;
        }
        this.validateGroup(currentGroupName, currentGroup);
      });
      __publicField(this, "handlerChange", (ev) => {
        if (!ev.target) {
          return;
        }
        this.handleFieldChange(ev.target);
        this.handleGroupChange(ev.target);
        this.renderErrors();
      });
      this.initialize(form, globalConfig, dictLocale);
    }
    initialize(form, globalConfig, dictLocale) {
      this.form = null;
      this.errors = {};
      this.isValid = false;
      this.isSubmitted = false;
      this.globalConfig = defaultGlobalConfig;
      this.errorLabels = {};
      this.successLabels = {};
      this.eventListeners = [];
      this.customStyleTags = {};
      this.tooltips = [];
      if (typeof form === "string") {
        const elem = document.querySelector(form);
        if (!elem) {
          throw Error(`Form with ${form} selector not found! Please check the form selector`);
        }
        this.setForm(elem);
      } else if (form instanceof HTMLFormElement) {
        this.setForm(form);
      } else {
        throw Error(`Form selector is not valid. Please specify a string selector or a DOM element.`);
      }
      this.globalConfig = __spreadValues(__spreadValues({}, defaultGlobalConfig), globalConfig);
      if (dictLocale) {
        this.dictLocale = dictLocale;
      }
      if (this.isTooltip()) {
        const styleTag = document.createElement("style");
        styleTag.textContent = errorLabelCss;
        this.customStyleTags[CustomStyleTagIds.Label] = document.head.appendChild(styleTag);
        this.addListener("scroll", document, this.handleDocumentScroll);
      }
    }
    getLocalisedString(str) {
      var _a;
      if (!this.currentLocale || !this.dictLocale.length) {
        return str;
      }
      const localisedStr = (_a = this.dictLocale.find((item) => item.key === str)) == null ? void 0 : _a.dict[this.currentLocale];
      return localisedStr || str;
    }
    getFieldErrorMessage(fieldRule, elem) {
      const msg = typeof fieldRule.errorMessage === "function" ? fieldRule.errorMessage(this.getElemValue(elem), this.fields) : fieldRule.errorMessage;
      return this.getLocalisedString(msg) || getDefaultFieldMessage(fieldRule.rule, fieldRule.value);
    }
    getFieldSuccessMessage(successMessage, elem) {
      const msg = typeof successMessage === "function" ? successMessage(this.getElemValue(elem), this.fields) : successMessage;
      return this.getLocalisedString(msg);
    }
    getGroupErrorMessage(groupRule) {
      return this.getLocalisedString(groupRule.errorMessage) || getDefaultGroupMessage(groupRule.rule);
    }
    getGroupSuccessMessage(groupRule) {
      return this.getLocalisedString(groupRule.successMessage);
    }
    setFieldInvalid(field, fieldRule) {
      this.fields[field].isValid = false;
      this.fields[field].errorMessage = this.getFieldErrorMessage(fieldRule, this.fields[field].elem);
    }
    setFieldValid(field, successMessage) {
      this.fields[field].isValid = true;
      if (successMessage !== void 0) {
        this.fields[field].successMessage = this.getFieldSuccessMessage(successMessage, this.fields[field].elem);
      }
    }
    setGroupInvalid(groupName, groupRule) {
      this.groupFields[groupName].isValid = false;
      this.groupFields[groupName].errorMessage = this.getGroupErrorMessage(groupRule);
    }
    setGroupValid(groupName, groupRule) {
      this.groupFields[groupName].isValid = true;
      this.groupFields[groupName].successMessage = this.getGroupSuccessMessage(groupRule);
    }
    getElemValue(elem) {
      switch (elem.type) {
        case "checkbox":
          return elem.checked;
        case "file":
          return elem.files;
        default:
          return elem.value;
      }
    }
    validateGroupRule(groupName, elems, groupRule) {
      switch (groupRule.rule) {
        case GroupRules.Required: {
          if (elems.every((elem) => !elem.checked)) {
            this.setGroupInvalid(groupName, groupRule);
          } else {
            this.setGroupValid(groupName, groupRule);
          }
        }
      }
    }
    validateFieldRule(field, elem, fieldRule, afterInputChanged = false) {
      const ruleValue = fieldRule.value;
      const elemValue = this.getElemValue(elem);
      if (fieldRule.plugin) {
        const result = fieldRule.plugin(elemValue, this.fields);
        if (!result) {
          this.setFieldInvalid(field, fieldRule);
        }
        return;
      }
      switch (fieldRule.rule) {
        case Rules.Required: {
          if (isEmpty(elemValue)) {
            this.setFieldInvalid(field, fieldRule);
          }
          break;
        }
        case Rules.Email: {
          if (typeof elemValue !== "string") {
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (!isEmail(elemValue)) {
            this.setFieldInvalid(field, fieldRule);
          }
          break;
        }
        case Rules.MaxLength: {
          if (ruleValue === void 0) {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (typeof ruleValue !== "number") {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a number. The field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (typeof elemValue !== "string") {
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (elemValue === "") {
            break;
          }
          if (isLengthMoreThanMax(elemValue, ruleValue)) {
            this.setFieldInvalid(field, fieldRule);
          }
          break;
        }
        case Rules.MinLength: {
          if (ruleValue === void 0) {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (typeof ruleValue !== "number") {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a number. The field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (typeof elemValue !== "string") {
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (elemValue === "") {
            break;
          }
          if (isLengthLessThanMin(elemValue, ruleValue)) {
            this.setFieldInvalid(field, fieldRule);
          }
          break;
        }
        case Rules.Password: {
          if (typeof elemValue !== "string") {
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (elemValue === "") {
            break;
          }
          if (!isPassword(elemValue)) {
            this.setFieldInvalid(field, fieldRule);
          }
          break;
        }
        case Rules.StrongPassword: {
          if (typeof elemValue !== "string") {
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (elemValue === "") {
            break;
          }
          if (!isStrongPassword(elemValue)) {
            this.setFieldInvalid(field, fieldRule);
          }
          break;
        }
        case Rules.Number: {
          if (typeof elemValue !== "string") {
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (elemValue === "") {
            break;
          }
          if (!isNumber(elemValue)) {
            this.setFieldInvalid(field, fieldRule);
          }
          break;
        }
        case Rules.MaxNumber: {
          if (ruleValue === void 0) {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (typeof ruleValue !== "number") {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (typeof elemValue !== "string") {
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (elemValue === "") {
            break;
          }
          const num = +elemValue;
          if (Number.isNaN(num) || isNumberMoreThanMax(num, ruleValue)) {
            this.setFieldInvalid(field, fieldRule);
          }
          break;
        }
        case Rules.MinNumber: {
          if (ruleValue === void 0) {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. The field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (typeof ruleValue !== "number") {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (typeof elemValue !== "string") {
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (elemValue === "") {
            break;
          }
          const num = +elemValue;
          if (Number.isNaN(num) || isNumberLessThanMin(num, ruleValue)) {
            this.setFieldInvalid(field, fieldRule);
          }
          break;
        }
        case Rules.CustomRegexp: {
          if (ruleValue === void 0) {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            return;
          }
          let regexp;
          try {
            regexp = new RegExp(ruleValue);
          } catch (e) {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] should be a valid regexp. This field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          const str = String(elemValue);
          if (str !== "" && !regexp.test(str)) {
            this.setFieldInvalid(field, fieldRule);
          }
          break;
        }
        case Rules.MinFilesCount: {
          if (ruleValue === void 0) {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (typeof ruleValue !== "number") {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length < ruleValue) {
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          break;
        }
        case Rules.MaxFilesCount: {
          if (ruleValue === void 0) {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (typeof ruleValue !== "number") {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be a number. The field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          if (Number.isFinite(elemValue == null ? void 0 : elemValue.length) && elemValue.length > ruleValue) {
            this.setFieldInvalid(field, fieldRule);
            break;
          }
          break;
        }
        case Rules.Files: {
          if (ruleValue === void 0) {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field is not defined. This field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            return;
          }
          if (typeof ruleValue !== "object") {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be an object. This field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            return;
          }
          const filesConfig = ruleValue.files;
          if (typeof filesConfig !== "object") {
            console.error(`Value for ${fieldRule.rule} rule for [${field}] field should be an object with files array. This field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            return;
          }
          const isFilePropsInvalid = (file, fileConfig) => {
            const minSizeInvalid = Number.isFinite(fileConfig.minSize) && file.size < fileConfig.minSize;
            const maxSizeInvalid = Number.isFinite(fileConfig.maxSize) && file.size > fileConfig.maxSize;
            const nameInvalid = Array.isArray(fileConfig.names) && !fileConfig.names.includes(file.name);
            const extInvalid = Array.isArray(fileConfig.extensions) && !fileConfig.extensions.includes(file.name.split(".")[file.name.split(".").length - 1]);
            const typeInvalid = Array.isArray(fileConfig.types) && !fileConfig.types.includes(file.type);
            return minSizeInvalid || maxSizeInvalid || nameInvalid || extInvalid || typeInvalid;
          };
          if (typeof elemValue === "object" && elemValue !== null) {
            for (let fileIdx = 0, len = elemValue.length; fileIdx < len; ++fileIdx) {
              const file = elemValue.item(fileIdx);
              if (!file) {
                this.setFieldInvalid(field, fieldRule);
                break;
              }
              const filesInvalid = isFilePropsInvalid(file, filesConfig);
              if (filesInvalid) {
                this.setFieldInvalid(field, fieldRule);
                break;
              }
            }
          }
          break;
        }
        default: {
          if (typeof fieldRule.validator !== "function") {
            console.error(`Validator for custom rule for [${field}] field should be a function. This field will be always invalid.`);
            this.setFieldInvalid(field, fieldRule);
            return;
          }
          const result = fieldRule.validator(elemValue, this.fields);
          if (typeof result !== "boolean" && typeof result !== "function") {
            console.error(`Validator return value for [${field}] field should be boolean or function. It will be cast to boolean.`);
          }
          if (typeof result === "function") {
            if (afterInputChanged) {
              this.fields[field].asyncCheckPending = true;
            } else {
              this.fields[field].asyncCheckPending = false;
              const promise = result();
              if (!isPromise(promise)) {
                console.error(`Validator function for custom rule for [${field}] field should return a Promise. This field will be always invalid.`);
                this.setFieldInvalid(field, fieldRule);
                return;
              }
              return promise.then((resp) => {
                if (!resp) {
                  this.setFieldInvalid(field, fieldRule);
                }
              }).catch(() => {
                this.setFieldInvalid(field, fieldRule);
              });
            }
          }
          if (!result) {
            this.setFieldInvalid(field, fieldRule);
          }
        }
      }
    }
    validateField(fieldName, afterInputChanged = false) {
      var _a;
      const field = this.fields[fieldName];
      field.isValid = true;
      const promises = [];
      [...field.rules].reverse().forEach((rule) => {
        const res = this.validateFieldRule(fieldName, field.elem, rule, afterInputChanged);
        if (isPromise(res)) {
          promises.push(res);
        }
      });
      if (field.isValid) {
        this.setFieldValid(fieldName, (_a = field.config) == null ? void 0 : _a.successMessage);
      }
      return Promise.allSettled(promises);
    }
    revalidateField(field) {
      if (typeof field !== "string") {
        throw Error(`Field selector is not valid. Please specify a string selector.`);
      }
      if (!this.fields[field]) {
        console.error(`Field not found. Check the field selector.`);
        return Promise.reject();
      }
      return new Promise((resolve) => {
        this.validateField(field, true).finally(() => {
          this.clearFieldStyle(field);
          this.clearFieldLabel(field);
          this.renderFieldError(field);
          resolve(!!this.fields[field].isValid);
        });
      });
    }
    validateGroup(groupName, group) {
      const promises = [];
      [...group.rules].reverse().forEach((rule) => {
        const res = this.validateGroupRule(groupName, group.elems, rule);
        if (isPromise(res)) {
          promises.push(res);
        }
      });
      return Promise.allSettled(promises);
    }
    focusInvalidField() {
      for (const fieldName in this.fields) {
        const field = this.fields[fieldName];
        if (!field.isValid) {
          setTimeout(() => field.elem.focus(), 0);
          break;
        }
      }
    }
    afterSubmitValidation(forceRevalidation = false) {
      this.renderErrors(forceRevalidation);
      if (this.globalConfig.focusInvalidField) {
        this.focusInvalidField();
      }
    }
    validate(forceRevalidation = false) {
      return new Promise((resolve) => {
        const promises = [];
        Object.keys(this.fields).forEach((fieldName) => {
          const promise = this.validateField(fieldName);
          if (isPromise(promise)) {
            promises.push(promise);
          }
        });
        Object.keys(this.groupFields).forEach((groupName) => {
          const group = this.groupFields[groupName];
          const promise = this.validateGroup(groupName, group);
          if (isPromise(promise)) {
            promises.push(promise);
          }
        });
        if (promises.length) {
          Promise.allSettled(promises).then(() => {
            this.afterSubmitValidation(forceRevalidation);
            resolve(true);
          });
        } else {
          this.afterSubmitValidation(forceRevalidation);
          resolve(false);
        }
      });
    }
    revalidate() {
      return new Promise((resolve) => {
        this.validateHandler(void 0, true).finally(() => {
          if (this.globalConfig.focusInvalidField) {
            this.focusInvalidField();
          }
          resolve(this.isValid);
        });
      });
    }
    validateHandler(ev, forceRevalidation = false) {
      if (this.globalConfig.lockForm) {
        this.lockForm();
      }
      return this.validate(forceRevalidation).finally(() => {
        var _a, _b;
        if (this.globalConfig.lockForm) {
          this.unlockForm();
        }
        if (this.isValid) {
          (_a = this.onSuccessCallback) == null ? void 0 : _a.call(this, ev);
        } else {
          (_b = this.onFailCallback) == null ? void 0 : _b.call(this, this.fields, this.groupFields);
        }
      });
    }
    setForm(form) {
      this.form = form;
      this.form.setAttribute("novalidate", "novalidate");
      this.removeListener("submit", this.form, this.formSubmitHandler);
      this.addListener("submit", this.form, this.formSubmitHandler);
    }
    addListener(type, elem, handler) {
      elem.addEventListener(type, handler);
      this.eventListeners.push({ type, elem, func: handler });
    }
    removeListener(type, elem, handler) {
      elem.removeEventListener(type, handler);
      this.eventListeners = this.eventListeners.filter((item) => item.type !== type || item.elem !== elem);
    }
    addField(field, rules, config) {
      if (typeof field !== "string") {
        throw Error(`Field selector is not valid. Please specify a string selector.`);
      }
      const elem = this.form.querySelector(field);
      if (!elem) {
        throw Error(`Field with ${field} selector not found! Please check the field selector.`);
      }
      if (!Array.isArray(rules) || !rules.length) {
        throw Error(`Rules argument for the field [${field}] should be an array and should contain at least 1 element.`);
      }
      rules.forEach((item) => {
        if (!("rule" in item || "validator" in item || "plugin" in item)) {
          throw Error(`Rules argument for the field [${field}] must contain at least one rule or validator property.`);
        }
        if (!item.validator && !item.plugin && (!item.rule || !Object.values(Rules).includes(item.rule))) {
          throw Error(`Rule should be one of these types: ${Object.values(Rules).join(", ")}. Provided value: ${item.rule}`);
        }
      });
      this.fields[field] = {
        elem,
        rules,
        isValid: void 0,
        config
      };
      this.setListeners(elem);
      if (this.isSubmitted) {
        this.validate();
      }
      return this;
    }
    removeField(field) {
      if (typeof field !== "string") {
        throw Error(`Field selector is not valid. Please specify a string selector.`);
      }
      if (!this.fields[field]) {
        console.error(`Field not found. Check the field selector.`);
        return this;
      }
      const type = this.getListenerType(this.fields[field].elem.type);
      this.removeListener(type, this.fields[field].elem, this.handlerChange);
      this.clearErrors();
      delete this.fields[field];
      return this;
    }
    removeGroup(group) {
      if (typeof group !== "string") {
        throw Error(`Group selector is not valid. Please specify a string selector.`);
      }
      if (!this.groupFields[group]) {
        console.error(`Group not found. Check the group selector.`);
        return this;
      }
      this.groupFields[group].elems.forEach((elem) => {
        const type = this.getListenerType(elem.type);
        this.removeListener(type, elem, this.handlerChange);
      });
      this.clearErrors();
      delete this.groupFields[group];
      return this;
    }
    addRequiredGroup(groupField, errorMessage, config, successMessage) {
      if (typeof groupField !== "string") {
        throw Error(`Group selector is not valid. Please specify a string selector.`);
      }
      const elem = this.form.querySelector(groupField);
      if (!elem) {
        throw Error(`Group with ${groupField} selector not found! Please check the group selector.`);
      }
      const inputs = elem.querySelectorAll("input");
      const childrenInputs = Array.from(inputs).filter((input) => {
        const parent = getClosestParent(this.groupFields, getNodeParents(input));
        if (!parent) {
          return true;
        }
        return parent[1].elems.find((elem2) => elem2 !== input);
      });
      this.groupFields[groupField] = {
        rules: [
          {
            rule: GroupRules.Required,
            errorMessage,
            successMessage
          }
        ],
        groupElem: elem,
        elems: childrenInputs,
        isDirty: false,
        isValid: void 0,
        config
      };
      inputs.forEach((input) => {
        this.setListeners(input);
      });
      return this;
    }
    getListenerType(type) {
      switch (type) {
        case "checkbox":
        case "select-one":
        case "file":
        case "radio": {
          return "change";
        }
        default: {
          return "input";
        }
      }
    }
    setListeners(elem) {
      const type = this.getListenerType(elem.type);
      this.removeListener(type, elem, this.handlerChange);
      this.addListener(type, elem, this.handlerChange);
    }
    clearFieldLabel(fieldName) {
      var _a, _b;
      (_a = this.errorLabels[fieldName]) == null ? void 0 : _a.remove();
      (_b = this.successLabels[fieldName]) == null ? void 0 : _b.remove();
    }
    clearFieldStyle(fieldName) {
      var _a, _b, _c, _d;
      const field = this.fields[fieldName];
      const errorStyle = ((_a = field.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
      Object.keys(errorStyle).forEach((key) => {
        field.elem.style[key] = "";
      });
      const successStyle = ((_b = field.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
      Object.keys(successStyle).forEach((key) => {
        field.elem.style[key] = "";
      });
      field.elem.classList.remove(...getClassList(((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass), ...getClassList(((_d = field.config) == null ? void 0 : _d.successFieldCssClass) || this.globalConfig.successFieldCssClass));
    }
    clearErrors() {
      var _a, _b;
      Object.keys(this.errorLabels).forEach((key) => this.errorLabels[key].remove());
      Object.keys(this.successLabels).forEach((key) => this.successLabels[key].remove());
      for (const fieldName in this.fields) {
        this.clearFieldStyle(fieldName);
      }
      for (const groupName in this.groupFields) {
        const group = this.groupFields[groupName];
        const errorStyle = ((_a = group.config) == null ? void 0 : _a.errorFieldStyle) || this.globalConfig.errorFieldStyle;
        Object.keys(errorStyle).forEach((key) => {
          group.elems.forEach((elem) => {
            var _a2;
            elem.style[key] = "";
            elem.classList.remove(...getClassList(((_a2 = group.config) == null ? void 0 : _a2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
          });
        });
        const successStyle = ((_b = group.config) == null ? void 0 : _b.successFieldStyle) || this.globalConfig.successFieldStyle || {};
        Object.keys(successStyle).forEach((key) => {
          group.elems.forEach((elem) => {
            var _a2;
            elem.style[key] = "";
            elem.classList.remove(...getClassList(((_a2 = group.config) == null ? void 0 : _a2.successFieldCssClass) || this.globalConfig.successFieldCssClass));
          });
        });
      }
      this.tooltips = [];
    }
    isTooltip() {
      return !!this.globalConfig.tooltip;
    }
    lockForm() {
      const elems = this.form.querySelectorAll("input, textarea, button, select");
      for (let i = 0, len = elems.length; i < len; ++i) {
        elems[i].setAttribute("data-just-validate-fallback-disabled", elems[i].disabled ? "true" : "false");
        elems[i].setAttribute("disabled", "disabled");
        elems[i].style.pointerEvents = "none";
        elems[i].style.webkitFilter = "grayscale(100%)";
        elems[i].style.filter = "grayscale(100%)";
      }
    }
    unlockForm() {
      const elems = this.form.querySelectorAll("input, textarea, button, select");
      for (let i = 0, len = elems.length; i < len; ++i) {
        if (elems[i].getAttribute("data-just-validate-fallback-disabled") !== "true") {
          elems[i].removeAttribute("disabled");
        }
        elems[i].style.pointerEvents = "";
        elems[i].style.webkitFilter = "";
        elems[i].style.filter = "";
      }
    }
    renderTooltip(elem, errorLabel, position) {
      var _a;
      const { top, left, width, height } = elem.getBoundingClientRect();
      const errorLabelRect = errorLabel.getBoundingClientRect();
      const pos = position || ((_a = this.globalConfig.tooltip) == null ? void 0 : _a.position);
      switch (pos) {
        case "left": {
          errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
          errorLabel.style.left = `${left - errorLabelRect.width - TOOLTIP_ARROW_HEIGHT}px`;
          break;
        }
        case "top": {
          errorLabel.style.top = `${top - errorLabelRect.height - TOOLTIP_ARROW_HEIGHT}px`;
          errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
          break;
        }
        case "right": {
          errorLabel.style.top = `${top + height / 2 - errorLabelRect.height / 2}px`;
          errorLabel.style.left = `${left + width + TOOLTIP_ARROW_HEIGHT}px`;
          break;
        }
        case "bottom": {
          errorLabel.style.top = `${top + height + TOOLTIP_ARROW_HEIGHT}px`;
          errorLabel.style.left = `${left + width / 2 - errorLabelRect.width / 2}px`;
          break;
        }
      }
      errorLabel.dataset.direction = pos;
      const refresh = () => {
        this.renderTooltip(elem, errorLabel, position);
      };
      return {
        refresh
      };
    }
    createErrorLabelElem(name, errorMessage, config) {
      const errorLabel = document.createElement("div");
      errorLabel.innerHTML = errorMessage;
      const customErrorLabelStyle = this.isTooltip() ? config == null ? void 0 : config.errorLabelStyle : (config == null ? void 0 : config.errorLabelStyle) || this.globalConfig.errorLabelStyle;
      Object.assign(errorLabel.style, customErrorLabelStyle);
      errorLabel.classList.add(...getClassList((config == null ? void 0 : config.errorLabelCssClass) || this.globalConfig.errorLabelCssClass), "just-validate-error-label");
      if (this.isTooltip()) {
        errorLabel.dataset.tooltip = "true";
      }
      if (this.globalConfig.testingMode) {
        errorLabel.dataset.testId = `error-label-${name}`;
      }
      this.errorLabels[name] = errorLabel;
      return errorLabel;
    }
    createSuccessLabelElem(name, successMessage, config) {
      if (successMessage === void 0) {
        return null;
      }
      const successLabel = document.createElement("div");
      successLabel.innerHTML = successMessage;
      const customSuccessLabelStyle = (config == null ? void 0 : config.successLabelStyle) || this.globalConfig.successLabelStyle;
      Object.assign(successLabel.style, customSuccessLabelStyle);
      successLabel.classList.add(...getClassList((config == null ? void 0 : config.successLabelCssClass) || this.globalConfig.successLabelCssClass), "just-validate-success-label");
      if (this.globalConfig.testingMode) {
        successLabel.dataset.testId = `success-label-${name}`;
      }
      this.successLabels[name] = successLabel;
      return successLabel;
    }
    renderErrorsContainer(label, errorsContainer) {
      const container = errorsContainer || this.globalConfig.errorsContainer;
      if (typeof container === "string") {
        const elem = this.form.querySelector(container);
        if (elem) {
          elem.appendChild(label);
          return true;
        } else {
          console.error(`Error container with ${container} selector not found. Errors will be rendered as usual`);
        }
      }
      if (container instanceof Element) {
        container.appendChild(label);
        return true;
      }
      if (container !== void 0) {
        console.error(`Error container not found. It should be a string or existing Element. Errors will be rendered as usual`);
      }
      return false;
    }
    renderGroupLabel(elem, label, errorsContainer, isSuccess) {
      if (!isSuccess) {
        const renderedInErrorsContainer = this.renderErrorsContainer(label, errorsContainer);
        if (renderedInErrorsContainer) {
          return;
        }
      }
      elem.appendChild(label);
    }
    renderFieldLabel(elem, label, errorsContainer, isSuccess) {
      var _a, _b, _c, _d, _e, _f, _g;
      if (!isSuccess) {
        const renderedInErrorsContainer = this.renderErrorsContainer(label, errorsContainer);
        if (renderedInErrorsContainer) {
          return;
        }
      }
      if (elem.type === "checkbox" || elem.type === "radio") {
        const labelElem = document.querySelector(`label[for="${elem.getAttribute("id")}"]`);
        if (((_b = (_a = elem.parentElement) == null ? void 0 : _a.tagName) == null ? void 0 : _b.toLowerCase()) === "label") {
          (_d = (_c = elem.parentElement) == null ? void 0 : _c.parentElement) == null ? void 0 : _d.appendChild(label);
        } else if (labelElem) {
          (_e = labelElem.parentElement) == null ? void 0 : _e.appendChild(label);
        } else {
          (_f = elem.parentElement) == null ? void 0 : _f.appendChild(label);
        }
      } else {
        (_g = elem.parentElement) == null ? void 0 : _g.appendChild(label);
      }
    }
    showLabels(fields, isError) {
      Object.keys(fields).forEach((fieldName, i) => {
        const error = fields[fieldName];
        const field = this.fields[fieldName];
        field.isValid = !isError;
        this.clearFieldStyle(fieldName);
        this.clearFieldLabel(fieldName);
        this.renderFieldError(fieldName, error);
        if (i === 0 && this.globalConfig.focusInvalidField) {
          setTimeout(() => field.elem.focus(), 0);
        }
      });
    }
    showErrors(fields) {
      if (typeof fields !== "object") {
        throw Error("[showErrors]: Errors should be an object with key: value format");
      }
      this.showLabels(fields, true);
    }
    showSuccessLabels(fields) {
      if (typeof fields !== "object") {
        throw Error("[showSuccessLabels]: Labels should be an object with key: value format");
      }
      this.showLabels(fields, false);
    }
    renderFieldError(fieldName, message) {
      var _a, _b, _c, _d, _e, _f;
      const field = this.fields[fieldName];
      if (field.isValid) {
        if (!field.asyncCheckPending) {
          const successLabel = this.createSuccessLabelElem(fieldName, message !== void 0 ? message : field.successMessage, field.config);
          if (successLabel) {
            this.renderFieldLabel(field.elem, successLabel, (_a = field.config) == null ? void 0 : _a.errorsContainer, true);
          }
          field.elem.classList.add(...getClassList(((_b = field.config) == null ? void 0 : _b.successFieldCssClass) || this.globalConfig.successFieldCssClass));
        }
        return;
      }
      this.isValid = false;
      field.elem.classList.add(...getClassList(((_c = field.config) == null ? void 0 : _c.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
      const errorLabel = this.createErrorLabelElem(fieldName, message !== void 0 ? message : field.errorMessage, field.config);
      this.renderFieldLabel(field.elem, errorLabel, (_d = field.config) == null ? void 0 : _d.errorsContainer);
      if (this.isTooltip()) {
        this.tooltips.push(this.renderTooltip(field.elem, errorLabel, (_f = (_e = field.config) == null ? void 0 : _e.tooltip) == null ? void 0 : _f.position));
      }
    }
    renderErrors(forceRevalidation = false) {
      var _a, _b, _c, _d;
      if (!this.isSubmitted && !forceRevalidation) {
        return;
      }
      this.clearErrors();
      this.isValid = true;
      for (const groupName in this.groupFields) {
        const group = this.groupFields[groupName];
        if (group.isValid) {
          group.elems.forEach((elem) => {
            var _a2, _b2;
            Object.assign(elem.style, ((_a2 = group.config) == null ? void 0 : _a2.successFieldStyle) || this.globalConfig.successFieldStyle);
            elem.classList.add(...getClassList(((_b2 = group.config) == null ? void 0 : _b2.successFieldCssClass) || this.globalConfig.successFieldCssClass));
          });
          const successLabel = this.createSuccessLabelElem(groupName, group.successMessage, group.config);
          if (successLabel) {
            this.renderGroupLabel(group.groupElem, successLabel, (_a = group.config) == null ? void 0 : _a.errorsContainer, true);
          }
          continue;
        }
        this.isValid = false;
        group.elems.forEach((elem) => {
          var _a2, _b2;
          Object.assign(elem.style, ((_a2 = group.config) == null ? void 0 : _a2.errorFieldStyle) || this.globalConfig.errorFieldStyle);
          elem.classList.add(...getClassList(((_b2 = group.config) == null ? void 0 : _b2.errorFieldCssClass) || this.globalConfig.errorFieldCssClass));
        });
        const errorLabel = this.createErrorLabelElem(groupName, group.errorMessage, group.config);
        this.renderGroupLabel(group.groupElem, errorLabel, (_b = group.config) == null ? void 0 : _b.errorsContainer);
        if (this.isTooltip()) {
          this.tooltips.push(this.renderTooltip(group.groupElem, errorLabel, (_d = (_c = group.config) == null ? void 0 : _c.tooltip) == null ? void 0 : _d.position));
        }
      }
      for (const fieldName in this.fields) {
        this.renderFieldError(fieldName);
      }
    }
    destroy() {
      this.eventListeners.forEach((event) => {
        this.removeListener(event.type, event.elem, event.func);
      });
      Object.keys(this.customStyleTags).forEach((key) => {
        this.customStyleTags[key].remove();
      });
      this.clearErrors();
      if (this.globalConfig.lockForm) {
        this.unlockForm();
      }
    }
    refresh() {
      this.destroy();
      if (!this.form) {
        console.error("Cannot initialize the library! Form is not defined");
      } else {
        this.initialize(this.form, this.globalConfig);
        Object.keys(this.fields).forEach((key) => {
          this.addField(key, [...this.fields[key].rules], this.fields[key].config);
        });
      }
    }
    setCurrentLocale(locale) {
      if (typeof locale !== "string" && locale !== void 0) {
        console.error("Current locale should be a string");
        return;
      }
      this.currentLocale = locale;
      if (this.isSubmitted) {
        this.validate();
      }
    }
    onSuccess(callback) {
      this.onSuccessCallback = callback;
      return this;
    }
    onFail(callback) {
      this.onFailCallback = callback;
      return this;
    }
  }
  
  
  
  /***/ }),
  
  /***/ "./node_modules/r-modalwindow/src/modalwindow.js":
  /*!*******************************************************!*\
    !*** ./node_modules/r-modalwindow/src/modalwindow.js ***!
    \*******************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ ModalWindow)
  /* harmony export */ });
  class ModalWindow {
    constructor(selector, options) {
      let defaultOptions = {
        isOpen: () => { },
        isClose: () => { },
  
        defaultSpeed: 300,
        autoFocusToCloseBtn: false,
  
        modalOverlayName: 'data-modal-overlay',
        modalWindowName: 'data-modal-target',
        modalWindowSpeedName: 'data-modal-speed',
        modalCloseBtnName: 'data-modal-close',
        modalOverlayBlockName: 'overlay-show',
        disableScrollName: 'dis-scroll',
        modalWindowBlockName: 'block',
        modalWindowShowName: 'window-show',
        fixElemName: 'data-modal-fix',
      };
  
      this.options = Object.assign(defaultOptions, options);
      this.btns = document.querySelectorAll(selector);
  
      this.modalOpened = false;
      this.speed = null;
  
      this.modalOverlay = document.querySelector(`[${this.options.modalOverlayName}]`);
      this.window = null;
      this.modalCloseBtn = null;
      this.modalFocusElems = null;
      this.previusFocusElem = null;
      this.documentFocusElems = null;
      this.previusActiveWindow = null;
  
      this.focusElems = [
        'a[href]',
        'input',
        'button',
        'select',
        'textarea',
        '[tabindex]'
      ]
  
      this.events();
    }
  
    events() {
      document.addEventListener('DOMContentLoaded', () => {
        if (this.btns.length > 0) {
          this.btns.forEach(btnEl => {
            document.addEventListener('click', (e) => {
              if (e.target == btnEl) {
                this.getDataPath(btnEl);
  
                if (!this.modalOpened) {
                  if (new Date().getTime() - this.lastClick < this.speed) return;
                  this.lastClick = new Date().getTime();
                  this.openModal(this.window);
                  e.preventDefault();
                }
  
                if (this.modalOpened) {
                  if (new Date().getTime() - this.lastClick < this.speed) return;
                  this.lastClick = new Date().getTime();
                  this.previusActiveWindow = document.querySelector(`.${this.options.modalWindowBlockName}.${this.options.modalWindowShowName}`);
                  if (this.previusActiveWindow != this.window) {
                    this.reOpenModal(this.previusActiveWindow, this.window);
                  }
                }
              }
  
              if (e.target == this.modalCloseBtn || e.target == this.modalOverlay) {
                if (new Date().getTime() - this.lastClick < this.speed) return;
                this.lastClick = new Date().getTime();
                if (this.modalOpened) {
                  this.closeModal(this.window);
                  e.preventDefault();
                }
              }
            })
          })
  
          document.addEventListener('keydown', (e) => {
            if (this.modalOpened) {
              if (e.code === 'Tab') {
                this.focusInModal(e);
              }
  
              if (e.code === 'Escape') {
                if (new Date().getTime() - this.lastClick < this.speed) return;
                this.lastClick = new Date().getTime();
                this.closeModal(this.window);
                e.preventDefault();
              }
            }
          })
        }
      })
    }
  
    getDataPath(btnEl) {
      const getDataTarget = btnEl.dataset.modal;
      this.window = document.querySelector(`[${this.options.modalWindowName}="${getDataTarget}"]`);
      this.modalCloseBtn = this.window.querySelector(`[${this.options.modalCloseBtnName}]`);
  
      if (btnEl.hasAttribute(`${this.options.modalWindowSpeedName}`)) {
        this.speed = btnEl.dataset.modalSpeed;
      } else {
        this.speed = this.options.defaultSpeed;
      }
    }
  
    openModal(windowEl) {
      this.options.isOpen(this);
      this.previusFocusElem = document.activeElement;
      this.documentFocusElems = document.querySelectorAll(this.focusElems);
      this.navigationOff(this.documentFocusElems);
      this.focusToModal(windowEl);
      this.disableScroll();
      this.modalOverlay.classList.add(this.options.modalOverlayBlockName);
      this.modalOverlay.style.setProperty('--transition-modal-time', `${this.speed / 1000}s`);
      windowEl.classList.add(this.options.modalWindowBlockName);
      setTimeout(() => {
        windowEl.classList.add(this.options.modalWindowShowName);
      });
      setTimeout(() => {
        this.modalOpened = true;
        this.navigationOn(this.documentFocusElems);
      }, this.speed);
    }
  
    closeModal(windowEl) {
      this.focusToBtn();
      this.modalOverlay.classList.remove(this.options.modalOverlayBlockName);
      windowEl.classList.remove(this.options.modalWindowShowName);
      setTimeout(() => {
        this.modalOverlay.removeAttribute('style');
        windowEl.classList.remove(this.options.modalWindowBlockName);
        this.modalOpened = false;
        this.enableScroll();
        this.navigationOn(this.documentFocusElems);
      }, this.speed);
      this.options.isClose(this);
    }
  
    focusToModal(windowEl) {
      this.modalFocusElems = Array.from(windowEl.querySelectorAll(this.focusElems));
      if (this.modalFocusElems.length > 0) {
        setTimeout(() => {
          this.modalFocusElems[0].focus();
        }, this.speed);
      }
  
      if (this.modalCloseBtn && this.options.autoFocusToCloseBtn) {
        setTimeout(() => {
          this.modalCloseBtn.focus();
        }, this.speed);
      }
    }
  
    focusToBtn() {
      setTimeout(() => {
        this.previusFocusElem.focus();
      }, this.speed);
    }
  
    focusInModal(e) {
      const focusArray = Array.prototype.slice.call(this.modalFocusElems);
      const focusedIndex = focusArray.indexOf(document.activeElement);
      if (!e.shiftKey && focusedIndex === focusArray.length - 1 && focusArray.length > 0) {
        this.modalFocusElems[0].focus();
        e.preventDefault();
      }
  
      if (focusArray.length === 0) {
        this.navigationOff(this.documentFocusElems);
      }
  
      if (e.shiftKey && focusedIndex === 0) {
        this.modalFocusElems[this.modalFocusElems.length - 1].focus();
        e.preventDefault();
      }
    }
  
    navigationOn(documentFocusElems) {
      documentFocusElems.forEach(documentFocusEl => {
        documentFocusEl.removeAttribute('tabIndex');
      })
    }
  
    navigationOff(documentFocusElems) {
      documentFocusElems.forEach(documentFocusEl => {
        documentFocusEl.tabIndex = -1;
      })
    }
  
    disableScroll() {
      const fixBlocks = document?.querySelectorAll(`[${this.options.fixElemName}]`);
      const pagePosition = window.scrollY;
      const paddingOffset = `${(window.innerWidth - document.body.offsetWidth)}px`;
  
      document.documentElement.style.scrollBehavior = 'none';
      fixBlocks.forEach(el => { el.style.paddingRight = paddingOffset; });
      document.body.style.paddingRight = paddingOffset;
      document.body.classList.add(this.options.disableScrollName);
      document.body.dataset.position = pagePosition;
      document.body.style.top = `-${pagePosition}px`;
    }
  
    enableScroll() {
      const fixBlocks = document?.querySelectorAll(`[${this.options.fixElemName}]`);
      document.body.classList.remove(this.options.disableScrollName);
      document.body.removeAttribute('style');
      fixBlocks.forEach(el => { el.removeAttribute('style'); });
      let pagePosition = parseInt(document.body.dataset.position, 10);
      window.scroll({ top: pagePosition, left: 0 });
      document.body.removeAttribute('data-position');
    }
  
    reOpenModal(previusActiveWindowEl, windowEl) {
      previusActiveWindowEl.classList.remove(this.options.modalWindowShowName);
      setTimeout(() => {
        this.enableScroll();
        previusActiveWindowEl.classList.remove(this.options.modalWindowBlockName);
        this.openModal(windowEl);
      }, this.speed);
    }
  }
  
  /***/ }),
  
  /***/ "./node_modules/r-phonemask/src/phonemask.js":
  /*!***************************************************!*\
    !*** ./node_modules/r-phonemask/src/phonemask.js ***!
    \***************************************************/
  /***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
  
  "use strict";
  __webpack_require__.r(__webpack_exports__);
  /* harmony export */ __webpack_require__.d(__webpack_exports__, {
  /* harmony export */   "default": () => (/* binding */ MaskPhone)
  /* harmony export */ });
  class MaskPhone {
    constructor(selector, options) {
      let defaultOptions = {
        isInput: () => { },
        isKeydown: () => { },
      };
      this.options = Object.assign(defaultOptions, options);
      this.tels = document.querySelectorAll(selector);
      this.regTel = /\D/g;
  
      this.events();
    }
  
    events() {
      document.addEventListener('DOMContentLoaded', () => {
        if (this.tels.length > 0) {
          this.tels.forEach(telEl => {
            document.addEventListener('input', (e) => {
              if (e.target == telEl) {
                this.masked(e);
                this.options.isInput(this);
              }
            })
            document.addEventListener('keydown', (e) => {
              if (e.target == telEl) {
                this.deleteFirstSymbols(e);
                this.options.isKeydown(this);
              }
            })
          })
        }
      })
    }
  
    numberFilter(inputTelElem) {
      return inputTelElem.value.replace(this.regTel, '');
    }
  
    masked(e) {
      const inputTel = e.target;
      const cursorPosiion = inputTel.selectionStart;
      const valueLength = inputTel.value.length;
      this.inputNumberValue = this.numberFilter(inputTel);
      inputTel.value = this.inputNumberValue;
      this.ruNumbers = ['7', '8', '9'];
      let firstSymbols = '';
      let formatting = '';
      if (this.ruNumbers.includes(this.inputNumberValue[0]) && this.inputNumberValue != '') {
        if (this.inputNumberValue[0] == '7' || this.inputNumberValue[0] == '9') {
          firstSymbols = '+7';
          inputTel.setAttribute('maxlength', 18);
        } else {
          firstSymbols = '8';
          inputTel.setAttribute('maxlength', 17);
        }
        if (this.inputNumberValue[0] == '9') {
          this.inputNumberValue = '9' + this.inputNumberValue;
        }
        formatting = inputTel.value = firstSymbols + ' ';
        if (this.inputNumberValue.length > 1) {
          formatting += '(' + this.inputNumberValue.substring(1, 4);
        }
        if (this.inputNumberValue.length >= 5) {
          formatting += ') ' + this.inputNumberValue.substring(4, 7);
        }
        if (this.inputNumberValue.length >= 8) {
          formatting += '-' + this.inputNumberValue.substring(7, 9);
        }
        if (this.inputNumberValue.length >= 10) {
          formatting += '-' + this.inputNumberValue.substring(9, 11);
        }
      }
      if (!this.ruNumbers.includes(this.inputNumberValue[0]) && this.inputNumberValue != '') {
        formatting = '+' + this.inputNumberValue;
        inputTel.setAttribute('maxlength', 13);
      }
      inputTel.value = formatting;
      let currSymbol = e.data;
      currSymbol = !this.regTel.test(currSymbol)
      if (valueLength != cursorPosiion) {
        if (currSymbol != this.regTel.test(currSymbol) && e.data != null) {
          inputTel.selectionStart = inputTel.selectionEnd = cursorPosiion - 1;
        } else {
          inputTel.selectionStart = inputTel.selectionEnd = cursorPosiion;
        }
      }
    }
  
    deleteFirstSymbols(e) {
      const inputTel = e.target;
      const valueLength = inputTel.value.length;
      if (e.keyCode == 8 && this.inputNumberValue != undefined) {
        if (this.ruNumbers.includes(this.inputNumberValue[0])) {
          if (valueLength <= 3) {
            inputTel.value = '';
          }
        }
      }
    }
  }
  
  /***/ })
  
  /******/ 	});
  /************************************************************************/
  /******/ 	// The module cache
  /******/ 	var __webpack_module_cache__ = {};
  /******/ 	
  /******/ 	// The require function
  /******/ 	function __webpack_require__(moduleId) {
  /******/ 		// Check if module is in cache
  /******/ 		var cachedModule = __webpack_module_cache__[moduleId];
  /******/ 		if (cachedModule !== undefined) {
  /******/ 			return cachedModule.exports;
  /******/ 		}
  /******/ 		// Create a new module (and put it into the cache)
  /******/ 		var module = __webpack_module_cache__[moduleId] = {
  /******/ 			// no module.id needed
  /******/ 			// no module.loaded needed
  /******/ 			exports: {}
  /******/ 		};
  /******/ 	
  /******/ 		// Execute the module function
  /******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  /******/ 	
  /******/ 		// Return the exports of the module
  /******/ 		return module.exports;
  /******/ 	}
  /******/ 	
  /************************************************************************/
  /******/ 	/* webpack/runtime/compat get default export */
  /******/ 	(() => {
  /******/ 		// getDefaultExport function for compatibility with non-harmony modules
  /******/ 		__webpack_require__.n = (module) => {
  /******/ 			var getter = module && module.__esModule ?
  /******/ 				() => (module['default']) :
  /******/ 				() => (module);
  /******/ 			__webpack_require__.d(getter, { a: getter });
  /******/ 			return getter;
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/define property getters */
  /******/ 	(() => {
  /******/ 		// define getter functions for harmony exports
  /******/ 		__webpack_require__.d = (exports, definition) => {
  /******/ 			for(var key in definition) {
  /******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
  /******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
  /******/ 				}
  /******/ 			}
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/hasOwnProperty shorthand */
  /******/ 	(() => {
  /******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
  /******/ 	})();
  /******/ 	
  /******/ 	/* webpack/runtime/make namespace object */
  /******/ 	(() => {
  /******/ 		// define __esModule on exports
  /******/ 		__webpack_require__.r = (exports) => {
  /******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
  /******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
  /******/ 			}
  /******/ 			Object.defineProperty(exports, '__esModule', { value: true });
  /******/ 		};
  /******/ 	})();
  /******/ 	
  /************************************************************************/
  var __webpack_exports__ = {};
  // This entry need to be wrapped in an IIFE because it need to be in strict mode.
  (() => {
  "use strict";
  /*!************************!*\
    !*** ./src/js/main.js ***!
    \************************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ "./src/js/_vendor.js");
  /* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ "./src/js/_vars.js");
  /* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ "./src/js/_functions.js");
  /* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ "./src/js/_components.js");
  
  
  
  
  })();
  
  /******/ })()
  ;
  //# sourceMappingURL=main.js.map