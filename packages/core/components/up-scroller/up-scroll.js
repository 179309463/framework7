import $ from 'dom7';

export default {
  name: 'upscroller',
  params: {
    upscroller: {
      up_text: '滚动至顶',
      down_text: '滚动至底',
      includeUpPages: [],
      includeDownPages: [],
    },
  },
  on: {
    pageInit(page) {
      const app = this;
      const params = app.params.upscroller;

      if (params.includeUpPages.includes(page.name)) {
        const upBtn = $(`<div class="upscroller">↑ ${params.up_text}</div>`);
        $(page.el).prepend(upBtn);

        upBtn.click((event) => {
          event.stopPropagation();
          event.preventDefault();
          const pageContent = $('.page-content', page.el);
          pageContent.scrollTop(0, Math.round(pageContent.scrollTop() / 4));
        });

        $('.page-content', page.el).scroll((event) => {
          const e = $(event.target).scrollTop();
          if (e > 300) {
            upBtn.addClass('show');
          } else {
            upBtn.removeClass('show');
          }
        });
      }

      if (params.includeDownPages.includes(page.name)) {
        const downBtn = $(`<div class="downscroller">↓ ${params.down_text}</div>`);
        $(page.el).append(downBtn);

        downBtn.click((event) => {
          event.stopPropagation();
          event.preventDefault();
          const pageContent = $('.page-content', page.el);
          pageContent.scrollTop(pageContent[0].scrollHeight, Math.round((pageContent[0].scrollHeight - pageContent.scrollTop()) / 4));
        });

        $('.page-content', page.el).scroll((event) => {
          const e = $(event.target).scrollTop();
          const contentHeight = $(event.target)[0].scrollHeight;
          const winHeight = $(window).height();
          if (contentHeight - winHeight - e < 300) {
            downBtn.addClass('hide');
          } else {
            downBtn.removeClass('hide');
          }
        });
      }
    },
  },
};
