import $ from 'dom7';

module.exports = {
	name: 'upscroller',
	params: {
		upscroller: {
            up_text: '滚动至顶',
            down_text: '滚动至底',
            includeUpPages: [],
            includeUpPages: [],
		}
	},
	on: {
		pageInit: function (page) {
			'use strict';

			var app = this;
			var params = app.params.upscroller;

			if (params.includeUpPages.includes(page.name)){
                var $up_btn = $('<div class="upscroller">↑ ' + params.up_text + '</div>');
                $(page.el).prepend($up_btn);
    
                $up_btn.click(function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    var pageContent = $('.page-content', page.el);
                    pageContent.scrollTop(0, Math.round(pageContent.scrollTop() / 4));
                });
    
                $(".page-content", page.el).scroll(function (event) {
                    var e = $(event.target).scrollTop();
                    if (e > 300) {
                        $up_btn.addClass('show');
                    } else {
                        $up_btn.removeClass('show');
                    }
                });
            }

            if (params.includeUpPages.includes(page.name)){
                var $down_btn = $('<div class="downscroller">↓ ' + params.down_text + '</div>');
                $(page.el).append($down_btn);
                
                $down_btn.click(function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    var pageContent = $('.page-content', page.el);
                    pageContent.scrollTop(pageContent[0].scrollHeight, Math.round((pageContent[0].scrollHeight-pageContent.scrollTop()) / 4));
                });
    
                $(".page-content", page.el).scroll(function (event) {
                    var e = $(event.target).scrollTop();
                    var contentHeight = $(event.target)[0].scrollHeight;
                    var winHeight = $(window).height();
                    if (contentHeight - winHeight - e < 300) {
                        $down_btn.addClass('hide');
                    } else {
                        $down_btn.removeClass('hide');
                    }
                });
            }

			
		},
	}
};