"use client";

import { useEffect, useRef } from 'react';

interface ShadowContentProps {
  html: string;
  stylesheets: string[];
}

export default function ShadowContent({ html, stylesheets }: ShadowContentProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.shadowRoot) {
      const shadow = containerRef.current.attachShadow({ mode: 'open' });

      // Add stylesheets to shadow root
      stylesheets.forEach(href => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        shadow.appendChild(link);
      });

      // Add Google Fonts to Shadow DOM
      const fontImport = document.createElement('style');
      fontImport.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700;800;900&display=swap');
      `;
      shadow.appendChild(fontImport);

      // Add custom styles
      const customStyle = document.createElement('style');
      customStyle.textContent = `
        .shadow-wrapper {
          background-color: #2B1A40 !important;
          color: #404040;
          font-family: 'Outfit', sans-serif;
          min-height: 100vh;
          margin: 0 !important;
          padding: 0 !important;
        }
        .elementor-heading-title {
          font-family: "Exo 2", sans-serif !important;
          font-weight: 800 !important;
        }
        
        body,
        .wgl-container,
        .elementor,
        .elementor-inner,
        .elementor-section-wrap,
        .row,
        .wgl_col-12,
        #main-content,
        #main {
          background-color: #2B1A40 !important;
          margin: 0 !important;
          padding: 0 !important;
          max-width: 100% !important;
          width: 100% !important;
        }
        
        /* GLOSARIO DE MÓDULOS CON IA */
        .wgl-accordion {
          background: #2B1A40 !important;
          padding: 0 !important;
          margin-top: 0 !important;
        }
        .wgl-accordion_panel {
          background: transparent !important;
          margin-bottom: 20px !important;
        }
        .dbl-title_wrapper .dbl-title_1,
        .dbl-title_wrapper .dbl-title {
          color: white !important;
          font-family: 'Exo 2', sans-serif !important;
          font-weight: 900 !important;
          font-size: 2.2rem !important;
          margin-top: 8rem !important;
          margin-bottom: 5rem !important;
          display: block !important;
          text-align: left !important;
        }
        .wgl-accordion_header {
          padding: 10px 24px !important;
          background: white !important;
          cursor: pointer !important;
          display: flex !important;
          justify-content: space-between !important;
          align-items: center !important;
          border-radius: 12px !important;
          transition: all 0.3s ease !important;
        }
        .wgl-accordion_title {
          font-family: 'Outfit', sans-serif !important;
          font-weight: 800 !important;
          font-size: 1.25rem !important;
          color: #1c1226 !important;
          display: flex !important;
          align-items: center !important;
        }
        .wgl-accordion_title-prefix {
          color: #e212ee !important;
          font-weight: 900 !important;
          margin-right: 5px !important;
        }
        .wgl-accordion_panel.active .wgl-accordion_title {
          color: #e212ee !important;
        }
        /* Force first item (Compras) to be magenta */
        .wgl-accordion_panel:first-of-type .wgl-accordion_title {
          color: #e212ee !important;
        }
        /* Force first item content to be visible */
        .wgl-accordion_panel:first-of-type .wgl-accordion_content {
          display: block !important;
        }
        .wgl-accordion_content {
          padding: 20px 24px 10px 24px !important;
          color: #ffffff !important;
          font-family: 'Outfit', sans-serif !important;
          font-size: 1.15rem !important;
          line-height: 1.8 !important;
          display: none;
          margin-top: 5px !important;
          margin-bottom: 5px !important;
        }
        .wgl-accordion_panel.active .wgl-accordion_content {
          display: block !important;
        }
        .wgl-accordion_icon {
          position: relative !important;
          width: 20px !important;
          height: 20px !important;
        }
        .wgl-accordion_icon:after {
          content: '' !important;
          position: absolute !important;
          right: 0 !important;
          top: 50% !important;
          transform: translateY(-50%) !important;
          color: #e212ee !important;
          font-weight: bold !important;
          font-size: 1.8rem !important;
        }
        .wgl-accordion_panel:first-of-type .wgl-accordion_icon:after {
          content: '—' !important;
        }
        .wgl-accordion_icon i {
          display: none !important;
        }
        .wgl_module_team .team-department,.wgl_module_team .team-since,.wgl_module_team .team-item_info .team-item_titles .team-title:hover,.wgl_module_team .team-item_info .team-info_icons .team-icon a:hover,.single-team .single_team_page .team-info_icons .team-icon a:hover,.wgl-icon:hover,.wgl-theme-color,.wgl-portfolio-item_wrapper .portfolio_link-icon:hover,.wgl-portfolio-item_corners,.wgl-portfolio-item_cats,.wgl-portfolio-single_wrapper .wgl-portfolio-item_meta span a:hover,.under_image .wgl-portfolio-item_title .title:hover a,.wgl-social-share_pages.hovered_style ul li a:hover,.inpulse_module_time_line_horizontal .tlh_check_wrap,.inpulse_module_testimonials .testimonials_item:before,.isotope-filter a:after,.wgl-container ul.inpulse_slash li:before,.single_type-1 .single_meta .author_post a:hover,.single_type-2 .single_meta .author_post a:hover,.info_prev-link_wrapper \u003e a,.info_next-link_wrapper \u003e a,#comments .commentlist .comment_info .meta-wrapper .comment-edit-link,.blog-style-standard .blog-post_meta-categories span + span:before,.blog-post_meta-categories span,.meta-wrapper a:hover,.single-team .single_team_page .team-info_icons .team-icon:hover,.inpulse_module_services_2 .services_link:hover,.inpulse_module_services_2 .services_wrapper i,.inpulse_module_double_headings .heading_subtitle,.inpulse_module_counter .counter_value_wrapper .counter_value_suffix,.inpulse_module_counter .counter_value_placeholder .counter_value_suffix,.inside_image.sub_layer_animation .post_cats a,.inside_image.sub_layer_animation .post_cats span,.inside_image.sub_layer_animation .wgl-portfolio-item_meta,.wgl-portfolio_container .wgl-carousel.arrows_center_mode .slick-prev:hover:after,.wgl-portfolio_container .wgl-carousel.arrows_center_mode .slick-next:hover:after,.inside_image .wgl-portfolio-item_meta,.wgl_timetabs .timetabs_headings .wgl_tab .services_icon,.wgl-portfolio-single_item .portfolio-category:hover,.wgl-portfolio-single_wrapper .wgl-portfolio-item_cats a:hover,.page-header_breadcrumbs span.current,.widget.widget_pages ul li a:hover,.widget.widget_meta ul li a:hover,.widget.widget_wgl_posts .recent-posts-widget li \u003e .recent-posts-content .post_title a:hover,.widget.widget_recent_comments ul li a:hover,.widget.widget_recent_entries ul li a:hover,.widget.widget_nav_menu ul li a:hover,body .widget_rss ul li .rsswidget:hover,body .widget_recent_entriesul li .post-date,body .widget_meta ul li .post_count,body .widget_archive ul li \u003e a:before,body .widget_product_categories ul li a:hover + .post_count,.recent-posts-widget .meta-wrapper a,.widget.inpulse_widget.inpulse_banner-widget .banner-widget_text .tags_title:after,body .widget_product_categories ul li a:hover,.author-widget_social a:hover,.widget.widget_recent_comments ul li span.comment-author-link a:hover,body .widget .widget-title .widget-title_wrapper:before,body .widget_nav_menu .current-menu-ancestor \u003e a,body .widget_nav_menu .current-menu-item \u003e a,ul.wp-block-latest-posts li a:hover,header.searсh-header .page-title span{color: #2b1a40;}header .header-link:hover,.hover_links a:hover {color: #2b1a40 !important;}.recent-posts-widget .meta-wrapper a,.isotope-filter a .number_filter,body .widget .widget-title .widget-title_inner:after{color: #2b1a40;}blockquote:after,.single_team_page .team-title:before,.share_post-container \u003e a,.next-link_wrapper .image_next:after,.prev-link_wrapper .image_prev:after,.prev-link_wrapper .image_prev .no_image_post,.next-link_wrapper .image_next .no_image_post,.blog-style-hero .btn-read-more .blog-post-read-more,.blog-style-hero .blog-post .wgl-video_popup,.blog-style-hero .blog-post .wgl-video_popup .videobox_link,.inpulse_module_double_headings .heading_title .heading_divider,.inpulse_module_double_headings .heading_title .heading_divider:before,.inpulse_module_double_headings .heading_title .heading_divider:after,.wpml-ls-legacy-dropdown .wpml-ls-sub-menu .wpml-ls-item a span:before,.wgl-portfolio-item_wrapper .wgl-portfolio-item_icon:hover,.wgl-container ul.inpulse_plus li:after,.wgl-container ul.inpulse_plus li:before,.wgl-container ul.inpulse_dash li:before,#multiscroll-nav span,#multiscroll-nav li .active span,ul.wp-block-categories.wp-block-categories-list li a:hover:after,.wgl-testimonials .wgl-testimonials_name:before,ul.wp-block-archives.wp-block-archives-list li a:before,ul.wp-block-categories.wp-block-categories-list li a:before{background: #2b1a40;}::selection,#comments \u003e h3:after,button:hover,mark,span.highlighter,.meta-wrapper span + span:before,.vc_wp_custommenu .menu .menu-item a:before,.primary-nav ul li.mega-menu.mega-cat div.mega-menu-container ul.mega-menu.cats-horizontal \u003e li.is-active \u003e a,.primary-nav ul li ul li \u003e a \u003e span:after,.primary-nav ul li ul li \u003e a \u003e span:before,.mobile_nav_wrapper .primary-nav \u003e ul \u003e li \u003e a \u003e span:after,.header_search.search_standard .header_search-field .search-form:after,.header_search .header_search-field .header_search-button-wrapper,.header_search.search_mobile_menu .header_search-field .search-form:after,.header_search .wgl-search,.sitepress_container \u003e .wpml-ls ul ul li a:hover,.blog-style-standard .format-no_featured .blog-post_wrapper:before,.blog-style-standard .format-quote .blog-post_wrapper:before,.blog-style-standard .format-audio .blog-post_wrapper:before,.blog-style-standard .format-link .blog-post_wrapper:before,.blog-style-hero .format-no_featured .blog-post-hero_wrapper:before,.blog-style-hero .format-quote .blog-post-hero_wrapper:before,.blog-style-hero .format-audio .blog-post-hero_wrapper:before,.blog-style-hero .format-link .blog-post-hero_wrapper:before,.button__wrapper:hover:after,.calendar_wrap caption,.comment-reply-title:after,.inpulse_divider .inpulse_divider_line .inpulse_divider_custom .divider_line,.inpulse_module_cats .cats_item-count,.inpulse_module_progress_bar .progress_bar,.inpulse_module_infobox.type_tile:hover:before,.inpulse_module_social.with_bg .soc_icon,.inpulse_module_title:after,.inpulse_module_title .carousel_arrows a:hover span,.inpulse_module_videobox .videobox_link,.inpulse_module_ico_progress .progress_completed,.inpulse_module_services_3 .services_icon_wrapper .services_circle_wrapper .services_circle,.inpulse_module_time_line_horizontal .tlh_check_wrap,.load_more_works,.mc_form_inside #mc_signup_submit,.wgl-social-share_pages.hovered_style .share_social-icon-plus,.wgl-ellipsis span,.inside_image .wgl-portfolio-item_divider div,.wgl_module_title.item_title .carousel_arrows a:hover,.wgl_timetabs .timetabs_headings .wgl_tab.active:after,.wgl-container ul.inpulse_plus li:before,.wgl-container ul li:before,.wgl_module_team .team-meta_info .line,.single-team .single_team_page .team-info_item.team-department:before,.wgl-social-share_pages.standard_style a:before,.blog-style-hero .blog-post-hero_wrapper .divider_post_info,.tagcloud a:hover,.wgl-portfolio_item_link:hover,body .widget_meta ul li a:hover:after,.widget.widget_categories ul li a:hover:before,body .widget_archive ul li a:hover:after,body .widget_product_categories ul li a:hover:before,.wgl-carousel .slick-arrow:hover,.page_404_wrapper .inpulse_404_button.wgl_button .wgl_button_link:hover,.wgl-pricing_plan .pricing_header:after,.wgl-portfolio-single_wrapper .wgl-portfolio-item_meta \u003e span:after,.wgl-portfolio-single_wrapper.single_type-3 .wgl-portfolio-item_cats a:hover,.wgl-portfolio-single_wrapper.single_type-4 .wgl-portfolio-item_cats a:hover,.elementor-slick-slider .slick-slider .slick-next:hover,.elementor-slick-slider .slick-slider .slick-prev:hover,.elementor-slick-slider .slick-slider .slick-next:focus,.elementor-slick-slider .slick-slider .slick-prev:focus{background-color: #2b1a40;}body .widget_search .search-form .search-button:hover,body .widget_search .woocommerce-product-search .search-button:hover,body .widget_product_search .search-form .search-button:hover,body .widget_product_search .woocommerce-product-search button[type=\"submit\"]:hover,body .widget_product_search .woocommerce-product-search .search-button:hover,body .widget_archive ul li a:before,aside \u003e .widget + .widget:before,.widget .calendar_wrap table td#today:before,.widget .calendar_wrap tbody td \u003e a:before,.widget .counter_posts,.widget.widget_pages ul li a:before,.widget.widget_nav_menu ul li a:before,.widget_nav_menu .menu .menu-item:before,.widget_postshero .recent-posts-widget .post_cat a,.widget_meta ul li \u003e a:before,.widget.inpulse_widget.inpulse_banner-widget .banner-widget_button:hover,.widget_archive ul li \u003e a:before {background-color: #2b1a40;}.blog-post_meta-date,#comments .form-submit input[type=\"submit\"]:hover,.wpcf7 .wpcf7-submit:hover,.load_more_item:hover,.load_more_wrapper .load_more_item:hover,.wgl-carousel.navigation_offset_element .slick-prev:hover,.wgl-carousel.navigation_offset_element .slick-next:hover,.inpulse_module_demo_item .di_button a,.next-link:hover,.prev-link:hover,.wpcf7 .call_to_action_1 .wgl_col-2 .wpcf7-submit:hover,.load_more_item,.wgl-portfolio-single_wrapper .wgl-portfolio-item_cats a,.coming-soon_form .wpcf7 .wpcf7-submit:hover,form.post-password-form input[type='submit'],.wgl-demo-item .wgl-button:hover{border-color: #2b1a40;background: #2b1a40;} .header_search,.load_more_wrapper .load_more_item,.blog-style-hero .format-no_featured .blog-post-hero_wrapper,.blog-style-hero .format-quote .blog-post-hero_wrapper,.blog-style-hero .format-audio .blog-post-hero_wrapper,.blog-style-hero .format-link .blog-post-hero_wrapper,.inpulse_module_title .carousel_arrows a:hover span:before,.page_404_wrapper .inpulse_404_button.wgl_button .wgl_button_link,.load_more_works,.blog-style-standard .format-no_featured .blog-post_wrapper,.blog-style-standard .format-quote .blog-post_wrapper,.blog-style-standard .format-audio .blog-post_wrapper,.blog-style-standard .format-link .blog-post_wrapper,#comments .form-submit input[type=\"submit\"],.author-info_social-link:after,.author-widget_social a span,.single_info-share_social-wpapper .share_link .share-icon_animation,.single-team .single_team_page .team-image,.wgl_module_team .team-image,.inside_image.offset_animation:before,.inpulse_module_videobox .videobox_link,.inpulse_module_products_special_cats .product_special_cats-image_wrap:before,.wpcf7 .call_to_action_1 .wgl_col-2 .wpcf7-submit,.wpcf7 .wpcf7-submit,.tagcloud a:hover,.wgl-portfolio_item_link,.slider-wrapper.wgl-carousel .blog-post_media-slider_slick .slick-arrow:hover,.elementor-widget-container .elementor-swiper-button:hover,.wgl-portfolio-single_wrapper.single_type-3 .wgl-portfolio-item_cats a:hover,.wgl-portfolio-single_wrapper.single_type-4 .wgl-portfolio-item_cats a:hover,.wgl-pricing_plan .pricing_header .pricing_title,.wgl-button.elementor-button,.wgl-carousel .slick-arrow,.wgl-services-3 .wgl-services_title,.elementor-widget .wgl-infobox .wgl-infobox_button,.coming-soon_form .wpcf7 .wpcf7-submit{border-color: #2b1a40;}.wgl-theme-header .header_search .header_search-field:after{border-bottom-color: rgba(43,26,64,0.9);}.theme_color_shadow {box-shadow:0px 9px 30px 0px rgba(43,26,64,0.4);}.inside_image .overlay:before,.inside_image.always_info_animation:hover .overlay:before{box-shadow: inset 0px 0px 0px 0px rgba(43,26,64,1);}.inside_image:hover .overlay:before,.inside_image.always_info_animation .overlay:before{box-shadow: inset 0px 0px 0px 10px rgba(43,26,64,1);}.blog-post_wrapper .blog-post_media .wgl-video_popup .videobox_link .videobox_icon,.blog-post-hero_wrapper .wgl-video_popup .videobox_link .videobox_icon{fill:#2b1a40;}
        
        /* HERO SECTION WITH CURVED DIVIDER */
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .elementor-element-12a2cde4 {
          background-color: #F5F5DC !important;
          position: relative !important;
          padding: 80px 40px 180px 40px !important;
          margin: 0 !important;
          width: 100% !important;
          max-width: 100% !important;
          z-index: 1 !important;
          /* The white bar requested by the user */
          border-top: 15px solid #FFFFFF !important;
        }
        
        .elementor-element-12a2cde4 .elementor-container {
          max-width: 100% !important;
          width: 100% !important;
          margin: 0 !important;
          padding: 0 !important;
          position: relative !important;
          z-index: 2 !important;
          background-color: transparent !important;
        }
        
        .elementor-element-12a2cde4 .elementor-row,
        .elementor-element-12a2cde4 .elementor-column-wrap,
        .elementor-element-12a2cde4 .elementor-widget-wrap {
          background-color: transparent !important;
        }
        
        .elementor-element-12a2cde4:after {
          content: '' !important;
          position: absolute !important;
          bottom: -2px !important;
          left: -50px !important;
          width: calc(100% + 100px) !important;
          height: 180px !important;
          background: #2B1A40 !important;
          clip-path: polygon(0 100%, 100% 40%, 100% 100%, 0 100%) !important;
          z-index: 0 !important;
        }
        
        .elementor-element-238cd402 .elementor-heading-title {
          color: #2B1A40 !important;
          font-family: 'Exo 2', sans-serif !important;
          font-weight: 900 !important;
          font-size: 5rem !important;
          line-height: 1.1 !important;
          margin-bottom: 5px !important;
          text-align: left !important;
          padding-left: 0 !important;
          visibility: visible !important;
          animation: fadeIn 1.5s ease-out forwards !important;
        }
        
        .elementor-element-238cd402 {
          animation: none !important;
        }
        
        .elementor-element-1d35196a .elementor-text-editor {
          color: #2B1A40 !important;
          font-family: 'Outfit', sans-serif !important;
          font-size: 1.3rem !important;
          font-weight: 400 !important;
          text-align: left !important;
          padding-left: 0 !important;
          opacity: 1 !important;
          visibility: visible !important;
          animation: fadeIn 2s ease-out forwards !important;
        }
        
        .elementor-element-1d35196a {
          opacity: 1 !important;
          visibility: visible !important;
          animation: none !important;
        }
        
        .elementor-element-2440972 {
          background-color: #2B1A40 !important;
          margin-top: 0 !important;
          padding-top: 40px !important;
          width: 100% !important;
          max-width: 100% !important;
        }
        
        .elementor-element-2440972 .elementor-container {
          max-width: 100% !important;
          width: 100% !important;
        }
        
        @media (max-width: 767px) {
          .elementor-element-12a2cde4 {
            padding: 40px 20px 80px 20px !important;
          }
          
          .elementor-element-238cd402 .elementor-heading-title {
            font-size: 2.5rem !important;
          }
        }
        
        /* HIDE DECORATIVE IMAGE DIVIDER */
        .elementor-element-b487396 {
          display: none !important;
        }
        
        .elementor-element-2440972 {
          margin-top: -1px !important;
        }

        /* CONTACT SECTION (FOOTER) */
        .extra-map-section-wrapper {
          background-color: #141226 !important;
          padding: 60px 20px !important;
        }
        
        /* MAPS - SHOW ONLY ONE (Hide mobile map, show only desktop) */
        .extra-map-section-wrapper .elementor-element-fc45df2 {
          display: none !important;
        }
        .extra-map-section-wrapper .elementor-element-eeef2c4 {
          display: block !important;
          margin-top: 20px !important;
        }
        .extra-map-section-wrapper .elementor-widget-google_maps iframe {
          border-radius: 12px !important;
          width: 100% !important;
          height: 200px !important;
        }

        .extra-map-section-wrapper h3.elementor-heading-title {
          color: white !important;
          font-family: 'Exo 2', sans-serif !important;
          font-weight: 800 !important;
          font-size: 1.8rem !important;
          margin-bottom: 25px !important;
          text-align: center !important;
        }
        
        /* Logo & Social Icons Column */
        .extra-map-section-wrapper .elementor-element-01b5b66 {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
        }
        
        .extra-map-section-wrapper .elementor-widget-image {
          margin-bottom: 25px !important;
          text-align: center !important;
          width: 100% !important;
        }
        
        .extra-map-section-wrapper .elementor-widget-image img {
          max-width: 180px !important;
          height: auto !important;
          display: block !important;
          margin: 0 auto !important;
        }
        
        .extra-map-section-wrapper .elementor-social-icons-wrapper {
          display: grid !important;
          grid-template-columns: repeat(3, 65px) !important;
          grid-template-rows: repeat(2, 65px) !important;
          gap: 12px !important;
          justify-content: center !important;
          width: 100% !important;
        }
        
        .extra-map-section-wrapper .elementor-social-icon {
          background-color: #f9f8eb !important;
          width: 65px !important;
          height: 65px !important;
          border-radius: 12px !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          transition: transform 0.3s ease !important;
        }
        .extra-map-section-wrapper .elementor-social-icon:hover {
          transform: translateY(-5px) !important;
          box-shadow: 0 5px 15px rgba(228, 18, 240, 0.4) !important;
        }
        .extra-map-section-wrapper .elementor-social-icon svg,
        .extra-map-section-wrapper .elementor-social-icon i {
          width: 32px !important;
          height: 32px !important;
          fill: #e412f0 !important;
          color: #e412f0 !important;
        }

        /* Form Column */
        .extra-map-section-wrapper .elementor-element-25c1b09 {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
        }
        
        .extra-map-section-wrapper .wpcf7-form input:not([type="submit"]),
        .extra-map-section-wrapper .wpcf7-form textarea {
          background: white !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 12px 18px !important;
          width: 100% !important;
          margin-bottom: 12px !important;
          font-family: 'Outfit', sans-serif !important;
          color: #333 !important;
          font-size: 1rem !important;
        }
        
        .extra-map-section-wrapper .wpcf7-form input::placeholder,
        .extra-map-section-wrapper .wpcf7-form textarea::placeholder {
          color: #999 !important;
          opacity: 1 !important;
        }
        
        .extra-map-section-wrapper .wpcf7-submit {
          background: white !important;
          color: #141226 !important;
          font-family: 'Outfit', sans-serif !important;
          font-weight: 800 !important;
          font-size: 1rem !important;
          text-transform: uppercase !important;
          padding: 12px 35px !important;
          border-radius: 5px !important;
          border: none !important;
          cursor: pointer !important;
          transition: all 0.3s ease !important;
          width: auto !important;
          display: inline-block !important;
          margin-top: 8px !important;
        }
        .extra-map-section-wrapper .wpcf7-submit:hover {
          background: #f0f0f0 !important;
        }

        /* Location Column */
        .extra-map-section-wrapper .elementor-element-529f048 {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
        }
        
        .extra-map-section-wrapper .elementor-text-editor {
          color: white !important;
          font-family: 'Outfit', sans-serif !important;
          font-size: 0.95rem !important;
          line-height: 1.8 !important;
          text-align: center !important;
        }
        .extra-map-section-wrapper .elementor-text-editor strong,
        .extra-map-section-wrapper .elementor-text-editor span {
          color: white !important;
        }

        /* FORCE VISIBILITY OF ANIMATED ELEMENTS */
        .elementor-invisible {
          visibility: visible !important;
          opacity: 1 !important;
          animation: fadeIn 1s ease-out forwards !important;
        }
      `;
      shadow.appendChild(customStyle);

      // Add accordion script inside shadow root
      const initAccordion = () => {
        const headers = shadow.querySelectorAll('.wgl-accordion_header');
        headers.forEach(header => {
          header.addEventListener('click', function (this: HTMLElement) {
            const panel = this.parentElement;
            const isActive = panel?.classList.contains('active');

            shadow.querySelectorAll('.wgl-accordion_panel').forEach(p => p.classList.remove('active'));
            shadow.querySelectorAll('.wgl-accordion_header').forEach(h => h.classList.remove('active'));

            if (!isActive) {
              panel?.classList.add('active');
              this.classList.add('active');
            }
          });
        });
      };

      // Add the content container
      const content = document.createElement('div');
      content.className = 'shadow-wrapper';
      content.style.scrollMarginTop = '0px';
      content.innerHTML = html;

      // Disable smooth scroll globally for a moment to avoid the "gliding" effect
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';

      // Perform initial scroll before injection
      window.scrollTo(0, 0);

      // Inject content
      shadow.appendChild(content);

      // Scroll again immediately after injection
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      initAccordion();

      // Ensure it stays at top on next frames and restore behavior
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        setTimeout(() => {
          document.documentElement.style.scrollBehavior = originalScrollBehavior;
        }, 100);
      });
    }
  }, [html, stylesheets]);

  return <div ref={containerRef} suppressHydrationWarning />;
}
