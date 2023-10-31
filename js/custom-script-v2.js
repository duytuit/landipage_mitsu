
jQuery(function($) {
    var epbien=500000;
    var phidangkiem=100000;
    var phiduongbo=1560000;
    var tinbienso={
        1:12,
        2:10,
        3:12,
        4:11,
        5:10,
    }
    var baohiem_tnds ={
        5:480700,
        7:873400,
        9:1026300
    };
    var data_mitsu=[
        {
            "loai_xe":1,// Attrage
            "gia_xe":380000000,
            "gia_thuc_ban":328000000,
            "gia_dong_thuan":451000000,
            "gia_tinh_thue":380000000,
            "cho_ngoi":5,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":2,// Mitsubishi Attrage CVT
            "gia_xe":465000000,
            "gia_thuc_ban":402000000,
            "gia_dong_thuan":363000000,
            "gia_tinh_thue":465000000,
            "cho_ngoi":5,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":3,// Attrage CVT Pre
            "gia_xe":480000000,
            "gia_thuc_ban":423000000,
            "gia_dong_thuan":476000000,
            "gia_tinh_thue":480000000,
            "cho_ngoi":5,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":4,// Outlander
            "gia_xe":825000000,
            "gia_thuc_ban":748000000,
            "gia_dong_thuan":792000000,
            "gia_tinh_thue":825000000,
            "cho_ngoi":5,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + 2 Bảo hiểm + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":5,//Outlander Pre
            "gia_xe":950000000,
            "gia_thuc_ban":863000000,
            "gia_dong_thuan":911000000,
            "gia_tinh_thue":950000000,
            "cho_ngoi":5,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + 2 Bảo hiểm + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":6,// Pajero Sport (4x2)
            "gia_xe":1130000000,
            "gia_thuc_ban":978000000,
            "gia_dong_thuan":1058000000,
            "gia_tinh_thue":1130000000,
            "cho_ngoi":5,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Bảo hiểm + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":7,// Pajero Sport (4x4)
            "gia_xe":1365000000,
            "gia_thuc_ban":1181000000,
            "gia_dong_thuan":1338000000,
            "gia_tinh_thue":1365000000,
            "cho_ngoi":5,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Bảo hiểm + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":8,// Xpander MT
            "gia_xe":555000000,
            "gia_thuc_ban":530000000,
            "gia_dong_thuan":538000000,
            "gia_tinh_thue":555000000,
            "cho_ngoi":7,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Bảo hiểm + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":9,// Xpander Eco
            "gia_xe":598000000,
            "gia_thuc_ban":544000000,
            "gia_dong_thuan":538000000,
            "gia_tinh_thue":598000000,
            "cho_ngoi":7,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Bảo hiểm + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":10,// Xpander Pre
            "gia_xe":658000000,
            "gia_thuc_ban":595000000,
            "gia_dong_thuan":538000000,
            "gia_tinh_thue":658000000,
            "cho_ngoi":7,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Bảo hiểm + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":11,// Xpander Cross Cam Đen
            "gia_xe":705000000,
            "gia_thuc_ban":634000000,
            "gia_dong_thuan":663000000,
            "gia_tinh_thue":705000000,
            "cho_ngoi":7,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Bảo hiểm + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":12,// Xpander Cross Trắng Đen
            "gia_xe":698000000,
            "gia_thuc_ban":629000000,
            "gia_dong_thuan":663000000,
            "gia_tinh_thue":698000000,
            "cho_ngoi":7,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Bảo hiểm + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":13,// Triton (GLX)
            "gia_xe":650000000,
            "gia_thuc_ban":585000000,
            "gia_dong_thuan":629000000,
            "gia_tinh_thue":650000000,
            "cho_ngoi":9,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Kính 3M + Trải Sàn"
        },
        {
            "loai_xe":14,// Triton (GLS 4x2 1 cầu)
            "gia_xe":780000000,
            "gia_thuc_ban":691000000,
            "gia_dong_thuan":752000000,
            "gia_tinh_thue":780000000,
            "cho_ngoi":9,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Bảo hiểm + Kính 3M + Trải Sàn + Lắp thùng cuộn cơ"
        },
        {
            "loai_xe":15,// Triton (GLS 4x4 2 cầu)
            "gia_xe":905000000,
            "gia_thuc_ban":835000000,
            "gia_dong_thuan":871000000,
            "gia_tinh_thue":905000000,
            "cho_ngoi":9,
            "tang_kem":"Sổ da đựng giấy tờ + Vitamin 1tr5 + Kính 3M + Trải Sàn"
        }
    ];
    'use strict';
    $('.select2').select2();

    $('.navbar-collapse ul li a').on('click', function() {
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top - 5
        }, 1000);
        return false;
    });


    //Slider
    $(document).ready(function() {
        // chitietgia();
        // uoc_tinh();
        var time = 7; // time in seconds
       
        var $progressBar,
            $bar,
            $elem,
            isPause,
            tick,
            percentTime;

        //Init the carousel
        $("#main-slider").find('.owl-carousel').owlCarousel({
            slideSpeed: 500,
            paginationSpeed: 500,
            singleItem: true,
            navigation: true,
            navigationText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            afterInit: progressBar,
            afterMove: moved,
            startDragging: pauseOnDragging,
            //autoHeight : true,
            transitionStyle: "fade" //fadeUp fade goDown backSlide

        });

        function progressBar(elem) {
            $elem = elem;
            buildProgressBar();
            start();
        }

        //create 
        function buildProgressBar() {
            $progressBar = $("<div>", {
                id: "progressBar"
            });
            $bar = $("<div>", {
                id: "bar"
            });
            $progressBar.append($bar).appendTo($elem);
        }

        function start() {
            percentTime = 0;
            isPause = false;
            tick = setInterval(interval, 10);
        };

        function interval() {
            if (isPause === false) {
                percentTime += 1 / time;
                $bar.css({
                    width: percentTime + "%"
                });
                if (percentTime >= 100) {
                    $elem.trigger('owl.next')
                }
            }
        }

        //pause while dragging 
        function pauseOnDragging() {
            isPause = true;
        }

        //moved callback
        function moved() {
            //clear interval
            clearTimeout(tick);
            //start again
            start();
        }
    });

    //Initiat WOW JS
    new WOW().init();

    // portfolio filter
    $(window).load(function() {
        'use strict';
        var $portfolio_selectors = $('.portfolio-filter >li>a');
        var $portfolio = $('.portfolio-items');
        $portfolio.isotope({
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });

        $portfolio_selectors.on('click', function() {
            $portfolio_selectors.removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $portfolio.isotope({
                filter: selector
            });
            return false;
        });
    });

    $(document).ready(function() {
        //Animated Progress
        $('.progress-bar').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).css('width', $(this).data('width') + '%');
                $(this).unbind('inview');
            }
        });

        //Animated Number
        $.fn.animateNumbers = function(stop, commas, duration, ease) {
            return this.each(function() {
                var $this = $(this);
                var start = parseInt($this.text().replace(/,/g, ""));
                commas = (commas === undefined) ? true : commas;
                $({
                    value: start
                }).animate({
                    value: stop
                }, {
                    duration: duration == undefined ? 1000 : duration,
                    easing: ease == undefined ? "swing" : ease,
                    step: function() {
                        $this.text(Math.floor(this.value));
                        if (commas) {
                            $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                        }
                    },
                    complete: function() {
                        if (parseInt($this.text()) !== stop) {
                            $this.text(stop);
                            if (commas) {
                                $this.text($this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,"));
                            }
                        }
                    }
                });
            });
        };

        $('.business-stats').bind('inview', function(event, visible, visiblePartX, visiblePartY) {
            var $this = $(this);
            if (visible) {
                $this.animateNumbers($this.data('digit'), false, $this.data('duration'));
                $this.unbind('inview');
            }
        });
    });

    /* -------- Isotope Filtering -------- */
    $(document).ready(function() {
      var $container = $("#isotope-gallery-container");
      var $filter = $(".filter");
      $(window).load(function () {
        // Initialize Isotope
        $container.isotope({
          itemSelector: ".gallery-item-wrapper",
        });
        $(".filter a").click(function () {
          var selector = $(this).attr("data-filter");
          $container.isotope({
            filter: selector,
          });
          return false;
        });
        $filter.find("a").click(function () {
          var selector = $(this).attr("data-filter");
          $filter.find("a").parent().removeClass("active");
          $(this).parent().addClass("active");
        });
      });
      $(window).smartresize(function () {
        $container.isotope("reLayout");
      });
      // End Isotope Filtering

      /* -------- Gallery Popup -------- */

      $(".gallery-zoom").magnificPopup({
        type: "image",
        // other options
      });
      // Inline popups
      $(".inline-popups").magnificPopup({
        delegate: "a",
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
          beforeOpen: function () {
            this.st.mainClass = this.st.el.attr("data-effect");
          },
        },
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
      });

      // Image popups
      $("#image-popups").magnificPopup({
        delegate: "a",
        type: "image",
        removalDelay: 500, //delay removal by X to allow out-animation
        callbacks: {
          beforeOpen: function () {
            // just a hack that adds mfp-anim class to markup
            this.st.image.markup = this.st.image.markup.replace(
              "mfp-figure",
              "mfp-figure mfp-with-anim"
            );
            this.st.mainClass = this.st.el.attr("data-effect");
          },
        },
        closeOnContentClick: true,
        midClick: true, // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
      });

      // Hinge effect popup
      $("a.hinge").magnificPopup({
        mainClass: "mfp-with-fade",
        removalDelay: 1000, //delay removal by X to allow out-animation
        callbacks: {
          beforeClose: function () {
            this.content.addClass("hinge");
          },
          close: function () {
            this.content.removeClass("hinge");
          },
        },
        midClick: true,
      });
    });
    // End Gallery Popup

    //Pretty Photo
    $("a[rel^='prettyPhoto']").prettyPhoto({
        social_tools: false
    });

    //Google Map
    // var latitude = $('#google-map').data('latitude');
    // var longitude = $('#google-map').data('longitude');

    // function initialize_map() {
    //     var myLatlng = new google.maps.LatLng(latitude, longitude);
    //     var mapOptions = {
    //         zoom: 12,
    //         scrollwheel: false,
    //         center: myLatlng
    //     };
    //     var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
    //     var marker = new google.maps.Marker({
    //         position: myLatlng,
    //         map: map
    //     });
    // }
    // google.maps.event.addDomListener(window, 'load', initialize_map);
    // Tính giá xe 
    $('.chitietgia').on('click','.doi_loai_gia',function(e){
       e.preventDefault;

       let vehicle = data_mitsu.find(s=>s.loai_xe == parseInt($('.dong_xe').val()));
       if($(this).text() == 'Giá niêm yết'){
          $(this).html('Giá bán');
          $('.chitietgia .gia_xe').val(formatCurrencyV2(vehicle.gia_thuc_ban.toString()))
       }else{
        $(this).html('Giá niêm yết');
        $('.chitietgia .gia_xe').val(formatCurrencyV2(vehicle.gia_xe.toString()))
       }
       let sumery_paid = 0;
         $('.chitietgia > tr').each(function (index, tr) {
             let get_cost = $(this).find("input.money").val();
             if(get_cost){
                  sumery_paid += parseInt(get_cost.replace(/,/g, ""));
             }
         })
        $('.tongchiphi').html(formatCurrencyV2(sumery_paid.toString()))
    })
    $('.khuvuc,.lap_rap,.dong_xe').change(function(e){
       e.preventdefault
    //    chitietgia();
    })
    function chitietgia(){
        if($('.khuvuc').val() && $('.lap_rap').val() && $('.dong_xe').val()){
            let vehicle = data_mitsu.find(s=>s.loai_xe == parseInt($('.dong_xe').val()));
            // console.log(vehicle.gia_xe);
            console.log(baohiem_tnds[vehicle.cho_ngoi]);
            //let tienbienso = tinbienso[parseInt($('.khuvuc').val())]
            let tienbienso = $('.khuvuc').val() == 1 ? 20000000 : 2000000;
            let thue_truoc_ba = $('.lap_rap').val() == 2 ? vehicle.gia_tinh_thue * tinbienso[parseInt($('.khuvuc').val())] / 100 : vehicle.gia_tinh_thue * (tinbienso[parseInt($('.khuvuc').val())]/2) / 100;
            let html='<tr style="font-weight: bold;">'+
                     '    <td data-label="STT" colspan="2" style="text-align: center;">Tổng chi phí lăn bánh</td>'+
                     '    <td data-label="Attrage MT" class="text-right tongchiphi"></td>'+
                     '</tr>'+
                     '<tr>'+
                     '    <td data-label="STT">1</td>'+
                     '    <td data-label="Phiên Bản" style="font-weight: bold;" class="doi_loai_gia">Giá niêm yết</td>'+
                     '    <td data-label="Attrage MT" class="text-right"> <input type="text" class="form-control money text-right gia_xe" value="'+formatCurrencyV2(vehicle.gia_xe.toString())+'" placeholder="Giá xe" /></td>'+
                     '</tr>'+
                     '<tr>'+
                     '    <td data-label="STT">2</td>'+
                     '    <td data-label="Phiên Bản">Giá tính thuế nhà nước</td>'+
                     '    <td data-label="Attrage MT" class="text-right"><input type="text" class="form-control text-right gia_tinh_thue" value="'+formatCurrencyV2(vehicle.gia_tinh_thue.toString())+'" placeholder="Giá tính thuế nhà nước" /></td>'+
                     '</tr>'+
                     '<tr>'+
                     '    <td data-label="STT">3</td>'+
                     '    <td data-label="Phiên Bản">Phí trước bạ</td>'+
                     '    <td data-label="Attrage MT" class="text-right"><input type="text" class="form-control money text-right phi_truoc_ba" value="'+formatCurrencyV2(thue_truoc_ba.toString())+'" placeholder="Phí trước bạ" /></td>'+
                     '</tr>'+
                     '<tr>'+
                     '    <td data-label="STT">4</td>'+
                     '    <td data-label="Phiên Bản">Bảo hiểm TNDS</td>'+
                     '    <td data-label="Attrage MT" class="text-right"><input type="text" class="form-control money text-right baohiem_tnds" value="'+formatCurrencyV2(baohiem_tnds[vehicle.cho_ngoi].toString())+'" placeholder="Bảo hiểm TNDS" /></td>'+
                     '</tr>'+
                     '<tr>'+
                     '    <td data-label="STT">5</td>'+
                     '    <td data-label="Phiên Bản">Tiền biển số</td>'+
                     '    <td data-label="Attrage MT" class="text-right"><input type="text" class="form-control money text-right tienbienso" value="'+formatCurrencyV2(tienbienso.toString())+'" placeholder="Tiền biển số" /></td>'+
                     '</tr>'+
                     '<tr>'+
                     '    <td data-label="STT">6</td>'+
                     '    <td data-label="Phiên Bản">Phí đăng kiểm</td>'+
                     '    <td data-label="Attrage MT" class="text-right"><input type="text" class="form-control money text-right phidangkiem" value="'+formatCurrencyV2(phidangkiem.toString())+'" placeholder="Phí đăng kiểm" /></td>'+
                     '</tr>'+
                     '<tr>'+
                     '    <td data-label="STT">7</td>'+
                     '    <td data-label="Phiên Bản">Phí đường bộ 1 năm</td>'+
                     '    <td data-label="Attrage MT" class="text-right"><input type="text" class="form-control money text-right phiduongbo" value="'+formatCurrencyV2(phiduongbo.toString())+'" placeholder="Phí đường bộ" /></td>'+
                     '</tr>'+
                     '<tr>'+
                     '    <td data-label="STT">8</td>'+
                     '    <td data-label="Phiên Bản">Ép biển</td>'+
                     '    <td data-label="Attrage MT" class="text-right"><input type="text" class="form-control money text-right epbien" value="'+formatCurrencyV2(epbien.toString())+'" placeholder="Ép biển" /></td>'+
                     '</tr>'+
                     '<tr>'+
                     '    <td data-label="STT">9</td>'+
                     '    <td data-label="Phiên Bản">Bảo hiểm thân vỏ xe</td>'+
                     '    <td data-label="Attrage MT" class="text-right"><input type="text" class="form-control money text-right baohiemthanvoxe" placeholder="Bảo hiểm thân vỏ" /></td>'+
                     '</tr>'+
                     '<tr>'+
                     '    <td data-label="STT">10</td>'+
                     '    <td data-label="Phiên Bản">Dịch vụ đăng kí đăng kiểm (tùy chọn)</td>'+
                     '    <td data-label="Attrage MT" class="text-right"><input type="text" class="form-control money text-right dichvudangkiem" placeholder="Dịch vụ đăng ký" /></td>'+
                     '</tr>'+
                     '<tr>'+
                     '    <td data-label="STT">11</td>'+
                     '    <td data-label="Phiên Bản">Tặng kèm</td>'+
                     '    <td data-label="Attrage MT" class="text-right tang_kem">'+vehicle.tang_kem+'</td>'+
                     '</tr>'+
                     '<tr style="font-weight: bold;">'+
                     '    <td data-label="STT" colspan="2" style="text-align: center;">Tổng chi phí lăn bánh</td>'+
                     '    <td data-label="Attrage MT" class="text-right tongchiphi"></td>'+
                     '</tr>';
             $('.chitietgia').html(html);
             let sumery_paid = 0;
             $('.chitietgia > tr').each(function (index, tr) {
                 let get_cost = $(this).find("input.money").val();
                 if(get_cost){
                      sumery_paid += parseInt(get_cost.replace(/,/g, ""));
                 }
             })
            $('.tongchiphi').html(formatCurrencyV2(sumery_paid.toString()))
           }
    }
    function formatCurrency(input) {
        var number = input.value.replace(/[,.]/g, '');
        return new Intl.NumberFormat().format(number).toString().replace(/\./g, ',');
    }
    
    function formatCurrencyV2(value) {
        var number = value.replace(/[,.]/g, '');
        return new Intl.NumberFormat().format(number).replace(/\./g, ',');
    } 
    $('.chitietgia').on('input','input.money', function(e){        
        $(this).val(formatCurrency(this));
        let sumery_paid = 0;
        $('.chitietgia > tr').each(function (index, tr) {
            let get_cost = $(this).find("input.money").val();
            if(get_cost){
                 sumery_paid += parseInt(get_cost.replace(/,/g, ""));
            }
        })
       $('.tongchiphi').html(formatCurrencyV2(sumery_paid.toString()))
    }).on('keypress',function(e){
        if(!$.isNumeric(String.fromCharCode(e.which))) e.preventDefault();
    }).on('paste', function(e){    
        var cb = e.originalEvent.clipboardData || window.clipboardData;      
        if(!$.isNumeric(cb.getData('text'))) e.preventDefault();
    });

    $('input.money_number').on('input',function(e){        
        $(this).val(formatCurrency(this));
    }).on('keypress',function(e){
        if(!$.isNumeric(String.fromCharCode(e.which))) e.preventDefault();
    }).on('paste', function(e){    
        var cb = e.originalEvent.clipboardData || window.clipboardData;      
        if(!$.isNumeric(cb.getData('text'))) e.preventDefault();
    });

    $('input.number').on('keypress',function(e){
        if(!$.isNumeric(String.fromCharCode(e.which))) e.preventDefault();
    }).on('paste', function(e){    
        var cb = e.originalEvent.clipboardData || window.clipboardData;      
        if(!$.isNumeric(cb.getData('text'))) e.preventDefault();
    });

    // ước tính

    $('.uoc_tinh').click(function(e){
        e.preventDefault;
        uoc_tinh();
    })
    function uoc_tinh() {
        let thoi_gian_vay = parseInt($('.thoi_gian_vay').val()) * 12;
         let so_tien_vay = parseInt($('.so_tien_vay').val().replace(/[,.]/g, ''));
         let so_tien_goc =Math.ceil(so_tien_vay/thoi_gian_vay);
         let du_no = so_tien_vay;
         let lai_suat_dau = parseFloat($('.lai_suat_dau').val())/12;
         let lai_suat_tiep_theo = parseFloat($('.lai_suat_tiep_theo').val())/12;
         let html ='';
         let tong_lai_phai_tra =0;
         let tong_tien_phai_tra =0;
         for (let index = 0; index < thoi_gian_vay; index++) {
             let lai_phai_tra =0;
             if(index < parseInt($('.thoi_gian_uu_dai').val())){
                 lai_phai_tra = du_no*lai_suat_dau/100;
             }else{
                 lai_phai_tra = du_no*lai_suat_tiep_theo/100;
             }
             html+='<tr>'+
                  '  <td>Tháng thứ '+(index+1)+'</td>'+
                  '  <td>'+formatCurrencyV2(Math.ceil(du_no).toString())+'</td>'+
                  '  <td>'+formatCurrencyV2(so_tien_goc.toString())+'</td>'+
                  '  <td>'+formatCurrencyV2(Math.ceil(lai_phai_tra).toString())+'</td>'+
                  '  <td>'+formatCurrencyV2(Math.ceil(so_tien_goc+lai_phai_tra).toString())+'</td>'+
                  '</tr>';
                  du_no = du_no-(so_tien_vay/thoi_gian_vay);
                  tong_lai_phai_tra+=lai_phai_tra;
                  tong_tien_phai_tra+=(so_tien_goc+lai_phai_tra);
         }
         $('#total_lai').text(formatCurrencyV2(Math.ceil(tong_lai_phai_tra).toString()));
         $('#total_goc').text(formatCurrencyV2(Math.ceil(tong_tien_phai_tra).toString()));
         $('.chi_tiet_khoan_vay').html(html);
    } 

    // popup 
    // khách hàng đăng ký
    $('.gui_thong_tin').click(function(e){
        e.preventDefault
        $('.messager').html('')
        let ho_ten_kh = $('.ho_ten_kh').val();
        let so_dien_thoai_kh = $('.so_dien_thoai_kh').val();
        let dong_xe_quan_tam = $('.dong_xe_quan_tam').val();
        console.log('đã đóng');
        $(this).prop('disabled', true);
        setTimeout(() => {
            $(this).prop('disabled', false);
          console.log('đã mở');
        }, 2000)
        if(ho_ten_kh && so_dien_thoai_kh){
            let param = {
                "hoten": ho_ten_kh,
                "sodienthoai":so_dien_thoai_kh,
                "dongxe": dong_xe_quan_tam,
            }

            let param_googlesheet = {
                "entry.1738557918": ho_ten_kh,
                "entry.1504401702":so_dien_thoai_kh,
                "entry.688203945": dong_xe_quan_tam,
            }

            call_api('post','https://docs.google.com/forms/u/0/d/e/1FAIpQLSepek15Pjyggi7rn7lHkhXrb79007ki8csVE_LqirBgMdqhKQ/formResponse',param_googlesheet)

            send_notify(param);
            $('.messager').html('Quý khách đã gửi thông tin thành công.')
           // $('#add_register').get(0).reset()
        }
       
    })
    function call_api(method,url,param) {
        return new Promise((resolve, reject) => {
            $.ajax({   
                url:url,
                method: method,
                data: param,
                success: function (response) {
                    resolve(response)
                },
                error: function(error){
                    reject(error)
                }
            })
        })
    }

    async function send_notify(param_query) {
        let method = 'get';
        let msg = '';
        msg += '\nTên Khách Hàng: ' + param_query?.hoten;
        msg += '\n\Số điện thoại: ' + param_query?.sodienthoai || '';
        msg += '\n\Dòng xe quan tâm: ' + param_query?.dongxe || '';
        msg += '\n=========================' + getTime() +'================================';
        let res = encodeURI(msg);
        await call_api(method, 'https://api.telegram.org/bot5800666869:AAF607_ZPv-S95fJ4wbe_n7lMH8_hGTl4yM/sendmessage?chat_id=-1001924563652&text=' + res);
    }
    function getTime() {
        const today = new Date();
        const all_time =
          today.getFullYear().toString() +
          (today.getMonth() + 1).toString() +
          today.getDate().toString() +
          '_' +
          today.getHours().toString() +
          today.getMinutes().toString() +
          today.getSeconds().toString() +
          today.getMilliseconds().toString();
        return all_time;
      }
});
(function () {
    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;
    var countDown = new Date('2023-11-30').getTime()
    var _days = document.getElementById("days")
    var _hours = document.getElementById("hours")
    var _minutes = document.getElementById("minutes")
    var _seconds = document.getElementById("seconds")
    if(_days && _hours && _minutes && _seconds){
        x = setInterval(function() {    
  
            const now = new Date().getTime(),
                  distance = countDown - now;
    
              _days.innerText = Math.floor(distance / (day)),
              _hours.innerText = Math.floor((distance % (day)) / (hour)),
              _minutes.innerText = Math.floor((distance % (hour)) / (minute)),
              _seconds.innerText = Math.floor((distance % (minute)) / second);
    
            //do something later when date is reached
            if (distance < 0) {
              document.getElementById("headline").innerText = "It's my birthday!";
              document.getElementById("countdown").style.display = "none";
              document.getElementById("content").style.display = "block";
              clearInterval(x);
            }
            //seconds
          }, 0)
    }
   
       
    }());