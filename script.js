let $ = document

const body = $.querySelector('body')

const header_nav = $.querySelector('.nav')
const nav_image = $.querySelector('.nav-image')

const search_icon = $.querySelector('#search_header')
const search_modal = $.querySelector('.search-modal')

const search_input = $.querySelector('.search-input input')
const search_wrapper = $.querySelector('.search-wrapper')

const clear_icon = $.querySelector('#clear_search')

const user_icon = $.querySelector('#user_header')
const user_modal = $.querySelector('.user-modal')
const user_clear = $.querySelector('.user-title-icon')
const scroll_top = $.querySelector('.scroll-top')

const basket_icon = $.querySelector('#basket_header')
const basket_modal = $.querySelector('.basket-modal')
const basket_clear = $.querySelector('.basket-title-icon')
const continue_shopping = $.querySelector('.continue-shopping')
const basket_modal_wrapper_product = $.querySelector('.basket-modal_wrapper_product')
const basket_modal_wrapper_price = $.querySelector('.basket-modal_wrappeer_price')

const filter_blur = $.querySelector('#filter_blur')

const slider_background = $.querySelector('.slider-image')
const radio_slider = $.querySelectorAll('.radio-button__input')

const arrow_right_slider = $.querySelector('#arrow_right')
const arrow_left_slider = $.querySelector('#arrow_left')

const tab_text_title = $.querySelectorAll('.tab-text-title p')

const product_list = $.querySelector('.product-wrapper')

const bedone_moom = $.querySelector('#bedone-moom')
const tabie = $.querySelector('#tabie')
const darmani = $.querySelector('#darmani')
const other = $.querySelector('#other')

const product_modal = $.querySelector('.product-modal')

const special_product_wrapper = $.querySelector('.special-product_wrapper')

const article_wrapper = $.querySelector('.article_wrapper')
const comment_wrapper = $.querySelector('.comment-wrapper')



let sliderImage = [
  { id: 1, class: 'yellow', title: 'ارسال سریع به سراسر ایران!', description: 'ارسال سریع و رایگان برای خرید های بالای 1 میلیون تومان.', background: 'bg_yellow.png', image: 'bg_yellow1.png', animation: 'animate__fadeInUp', btn: '#EB6D2F' },
  { id: 2, class: 'purple', title: 'جمع آوری شده از طبیعت', description: 'تغذیه شده با شهد گل های طبیعی کوهستان های زاگرس', background: 'bg_purple.png', image: 'bg_purple1.png', animation: 'animate__fadeInUp', btn: '#F7B231' },
  { id: 3, class: 'orange', title: 'تولید شده از شهد گل های کنار', description: 'تولید شده از عسل ارگانیک و عصاره بره موم خالص', background: 'bg_orange.png', image: 'bg_orange1.png', animation: 'animate__fadeInUp', btn: '#EB6D2F' },
]

var swiper = new Swiper(".comment-swiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  freeMode: true,
  grabCursor: true,
});
var swiper = new Swiper(".swiper_article", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pegi-article",
    clickable: true,
  },
});

let indexSlider = 0
let sum_price_basket = 0

//chage height header when scroll 
function change_header() {
  if (document.documentElement.scrollTop > 5) {
    header_nav.style.padding = '0 3rem'
    header_nav.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'

    nav_image.style.margin = '0.4rem 2rem'
    nav_image.style.height = '50px'
    nav_image.style.width = '50px'
    
  } else if (document.documentElement.scrollTop <= 5) {
    header_nav.style.padding = '0.8rem 3rem'
    header_nav.style.backgroundColor = 'rgba(0, 0, 0, 0.4)'

    nav_image.style.margin = '0 2rem'
    nav_image.style.height = '63px'
    nav_image.style.width = '63px'
  }
}
function scrollTop_botton() {
  if (document.documentElement.scrollTop > 260) {
    scroll_top.style.left = '20px'
    scroll_top.style.opacity = '1'
  } else if (document.documentElement.scrollTop <= 260) {
    scroll_top.style.left = '-50px'
    scroll_top.style.opacity = '0'
  }
  scroll_top.addEventListener('click', function () {
    document.documentElement.scrollTop = 0
  })
}

//modal
function open_modal_search() {

  if (search_icon.innerHTML == 'search') {
    search_icon.innerHTML = 'clear'
    search_modal.style.top = '93px'
    search_modal.style.opacity = '1'
    search_modal.style.width = '96rem'
    body.className = 'hide-srcoll'
  } else {
    close_modal_search()
  }
  
}
function close_modal_search() {
  search_icon.innerHTML = 'search'
  search_modal.style.top = '48rem'
  search_modal.style.opacity = '0'
  body.className = ''
  search_input.value = ''
  search_wrapper.innerHTML = '<p class="search-text">برای دیدن محصولات که دنبال آن هستید تایپ کنید.</p>'
}
function open_modal_user() {
  user_modal.style.left = '0'
  filter_blur.className = 'blur-bg'
  close_modal_search()
}
function close_modal_user() {
  user_modal.style.left = '-340px'
  filter_blur.className = ''
}
function open_modal_basket() {
  basket_modal.style.left = '0'
  filter_blur.className = 'blur-bg'
  close_modal_search()
}
function close_modal_basket() {
  basket_modal.style.left = '-340px'
  filter_blur.className = ''
}

//header slider
function slider() {
  slider_background.innerHTML = ''
  let slideData = sliderImage[indexSlider]
  slider_background.style.backgroundImage = 'url(' + slideData.background + ')'
  slider_background.insertAdjacentHTML('beforeend',
    '<div class="slider-text wow animate__animated animate__fadeInUp">' +
    '<h2> ' + slideData.title + ' </h2>' +
    '<p> ' + slideData.description + ' </p>' +
    '<button class="slider-text-btn" style="background-color:' + slideData.btn + ';"><a href="shop.html">خرید کن!</a></button>' +
    '</div>' +
    '<img class="wow animate__animated ' + slideData.animation + ' ' + slideData.class + '" src="' + slideData.image + '" alt="">')
}
function next_image_slider() {
  indexSlider++
  if (indexSlider > sliderImage.length - 1) {
    indexSlider = 0
  }
  slider()
  radio_btn_slider()
}
function prev_image_slider() {
  indexSlider--
  if (indexSlider < 0) {
    indexSlider = sliderImage.length - 1
  }
  slider()
  radio_btn_slider()
}
radio_slider.forEach(function (radio) {
  radio.addEventListener('click', function (event) {
    indexSlider = event.target.value
    radio.setAttribute('checked', 'checked')
    slider()
  })
})
function radio_btn_slider() {
  radio_slider.forEach(function (radio_clear) {
    radio_clear.removeAttribute('checked', 'checked')
  })
  radio_slider.forEach(function (radio) {
    if (radio.value == indexSlider) {
      radio.setAttribute('checked', 'checked')
    }
  })
}
function auto_next_image() {
  setInterval(function () { next_image_slider() }, 5000)
} auto_next_image()


//search product
function searchProducts() {
  let searchValue = search_input.value

  if (searchValue) {
    search_wrapper.innerHTML = ''

    let filterWord = products.filter(function (product) {
      return product.name.includes(searchValue) && product.available
    })
    
    searchProductsGenerator(filterWord)

  } else {
    search_wrapper.innerHTML = '<p class="search-text">برای دیدن محصولات که دنبال آن هستید تایپ کنید.</p>'
  }
}
function searchProductsGenerator(productArray) {
  if(!productArray.length) {
    search_wrapper.innerHTML = '<p class="search-text">محصول مورد نظر شما یافت نشد!</p>'
  }
  productArray.forEach(function (product) {
    switch (product.status) {
      case 'off':
        search_wrapper.insertAdjacentHTML('beforeend',
          '<div class="search-product-item">' +
          '<a href="#" class="product-item-link">' +
          '<img src="'+ product.image1 +'" alt="">' +
          '<div class="serach-product-text">' +
          '<p class="serach-product-name">'+ product.name +'</p>' +
          '<div class="serach-product-price">' +
          '<p class="serach-product-price-old">'+ product.price +'</p>' +
          '<p class="serach-product-pric-new">'+ product.newPrice +' تومان '+'</p>' +
          '</div>' +
          '</div>' +
          '</a>' +
          '</div> ')
        break;

      case '':
        search_wrapper.insertAdjacentHTML('beforeend',
          '<div class="search-product-item">' +
          '<a href="#" class="product-item-link">' +
          '<img src="' + product.image1 + '" alt="">' +
          '<div class="serach-product-text">' +
          '<p class="serach-product-name">' + product.name + '</p>' +
          '<p class="serach-product-price">' + product.newPrice + ' تومان ' + '</p>' +
          '</div>' +
          '</a>' +
          '</div>')
    }
  })
}

//change text tab prudoct color when click them
tab_text_title.forEach(function (text) {
  text.addEventListener('click', function () {
    tab_text_title.forEach(function (clear_text) {
      clear_text.className = ''
    })
    text.className = 'tap-text-title-color'
  })
})


// load products
function load_product(product_item) {
  product_list.innerHTML = ''
  var swiper = new Swiper(".product-list", {
    slidesPerView: 4,
    spaceBetween: 10,
    navigation: {
      nextEl: '.fa-angle-left',
      prevEl: '.fa-angle-right',
    },
  });

  product_item.forEach(function (product) {
    if (product.status == 'off') {
      product_list.insertAdjacentHTML('beforeend',
        '<div class="swiper-slide">' +
        '<div class="product-item">' +
        '<div class="ih-item square effect6 bottom_to_top">' +
        '<a>' +
        '<div class="img">' +
        '<img src="' + product.image1 + '" alt="img"/>' +
        '</div>' +
        '<div class="product-percent">' +
        product.percent + '%' +
        '</div>' +
        '<div class="info">' +
        '<img src="' + product.image2 + '" alt=""/>' +
        '<div class="hover-image-nav">' +
        '<i class="material-icons tooltip add-to-basket" onclick="addProductToArray(event),open_modal_basket()" id="' + product.id + '">' +
        'shopping_cart' +
        '<span class="tooltiptext"> افزودن به سبد خرید </span>' +
        '</i>' +
        '<i class="material-icons tooltip" onclick="OpenModalProduct(event)" id="' + product.id + '">' +
        'search' +
        '<span class="tooltiptext"> مشاهده سریع </span>' +
        '</i>' +
        '<i class="fa fa-random tooltip" id="compare_product">' +
        '<span class="tooltiptext">  مقایسه </span>' +
        '</i>' +
        '<i class="material-icons tooltip" id="favorite_product">' +
        'favorite_border' +
        '<span class="tooltiptext"> افزودن به علاقه مندی </span>' +
        '</i>' +
        '</div>' +
        '</div>' +
        '</a>' +
        '</div>' +
        '<a class="product-text" href="#"><p> ' + product.name + ' </p></a>' +
        '<div class="product-price-wrapper">' +
        '<p class="old-product-price">' + product.price + ' تومان ' + '</p>' +
        '<p class="new-product-price">' + product.newPrice + ' تومان ' + '</p>' +
        '</div>' +
        '</div>' +
        '</div>')
    } else if (!product.available) {
      product_list.insertAdjacentHTML('beforeend',
        '<div class="swiper-slide">' +
        '<div class="product-item gray-filter">' +
        '<div class="ih-item square effect6 bottom_to_top">' +
        '<a>' +
        '<div class="img">' +
        '<img src="' + product.image1 + '" alt="img"/>' +
        '</div>' +
        '<div class="info">' +
        '<img src="' + product.image2 + '" alt=""/>' +
        '</div>' +
        '</a>' +
        '</div>' +
        '<p class="product-text"> ' + product.name + ' </p>' +
        '<p class="product-not-available-text"> ناموجود  </p>' +
        '</div>' +
        '</div>')
    } else {
      product_list.insertAdjacentHTML('beforeend',
        '<div class="swiper-slide">' +
        '<div class="product-item" id="' + product.id + '">' +
        '<div class="ih-item square effect6 bottom_to_top"><a>' +
        '<div class="img"><img src="' + product.image1 + '" alt="img"></div>' +
        '<div class="info">' +
        '<img src="' + product.image2 + '" alt="">' +
        '<div class="hover-image-nav">' +
        '<i class="material-icons tooltip add-to-basket" onclick="addProductToArray(event),open_modal_basket()" id="' + product.id + '">' +
        'shopping_cart' +
        '<span class="tooltiptext"> افزودن به سبد خرید </span>' +
        '</i>' +
        '<i class="material-icons tooltip" onclick="OpenModalProduct(event)" id="' + product.id + '">' +
        'search' +
        '<span class="tooltiptext"> مشاهده سریع </span>' +
        '</i>' +
        '<i class="fa fa-random tooltip" id="compare_product">' +
        '<span class="tooltiptext"> مقایسه </span>' +
        '</i>' +
        '<i class="material-icons tooltip" id="favorite_product">' +
        'favorite_border' +
        '<span class="tooltiptext"> افزودن به علاقه مندی </span>' +
        '</i>' +
        '</div>' +
        '</div></a></div>' +
        '<a class="product-text" href="#"><p>' + product.name + '</p></a>' +
        '<p class="product-price">' + product.price + ' تومان ' + '</p>' +
        '</div>' +
        '</div>')
    }
  })
  let favorite_product = $.querySelectorAll('#favorite_product')
  let compare_product = $.querySelectorAll('#compare_product')

  favorite_product.forEach(function (favorite) {
    favorite.addEventListener('click', function () {
      favorite.innerHTML = 'done'
    })
  })
  compare_product.forEach(function (compare) {
    compare.addEventListener('click', function () {
      compare.className = 'fa fa-check tooltip'
    })
  })
}
function OpenModalProduct(event) {

  filter_blur.className = 'blur-bg'
  body.style.overflow = 'hidden'

  let productModal = products.find(function (product) {
    return product.id == event.target.id
  })
  product_modal.insertAdjacentHTML('beforeend',
    '<div class="product-modal_image" data-aos="fade-left">' +
    '<div class="swiper product-modal_swiper">' +
    '<div class="swiper-wrapper product-modal_wrapper">' +
    '<div class="swiper-slide"><img src="' + productModal.image1 + '" alt=""></div>' +
    '<div class="swiper-slide"><img src="' + productModal.image2 + '" alt=""></div>' +
    '</div>' +
    '<div class="swiper-button-next"></div>' +
    '<div class="swiper-button-prev"></div>' +
    '</div>' +
    '<button><a href="#"> نمایش جزئیات </a></button>' +
    '</div>' +
    '<div class="product-modal_detail" data-aos="fade-left">' +
    '<i class="material-icons product-modal_detail-icon" onclick="CloseModalProduct()">clear</i>' +
    '<a class="product-modal_detail-text" href="#"><p>' + productModal.name + '</p></a>' +
    '<p class="product-modal_detail-price">' + productModal.newPrice + ' تومان</p>' +
    '<ul>' +
    '<li> حاوی 10 گرم ژل رویال با کیفیت اروپایی </li>' +
    '<li> 10HDA بالای 6 </li>' +
    '<li> ظرف نشکن با خاصیت ضدنور </li>' +
    '<li> عدم نیاز به فریز کردن </li>' +
    '<li> دارای خواص درمانی </li>' +
    '</ul>' +
    '<button class="product-modal_detail-btn" onclick="CloseModalProduct(),addProductToArray(event),open_modal_basket()" id="' + productModal.id + '"> افزودن به سبد خرید </button>' +
    '<hr>' +
    '<p class="product-modal_group"> دسته : <a href="#"> بدون موم </a></p>' +

    '<div class="product-modal_socialmedia">' +
    '<p class="product-modal_socialmedia-text"> اشتراک گذاری : </p>' +
    '<div class="product-modal_socialmedia-icon">' +
    '<a href="#"><i class="fa fa-facebook"></i></a>' +
    '<a href="#"><i class="fa fa-twitter"></i></a>' +
    '<a href="#"><i class="fa fa-pinterest"></i></a>' +
    '<a href="#"><i class="fa fa-linkedin"></i></a>' +
    '<a href="#"><i class="fa fa-telegram"></i></a>' +
    '</div>' +
    '</div>' +
    '</div>')
  var swiper = new Swiper(".product-modal_swiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}
function CloseModalProduct() {
  body.style.overflow = 'visible'
  product_modal.innerHTML = ''
  filter_blur.className = ''
}
function load_product_bedone_moom() {
  let product_item = ''

  product_item = products.filter(function (product) {
    return product.group == 'bedoneMoom'
  })
  load_product(product_item)
}
function load_product_tabie() {
  let product_item = ''

  product_item = products.filter(function (product) {
    return product.group == 'tabie'
  })
  load_product(product_item)
}
function load_product_darmani() {
  let product_item = ''

  product_item = products.filter(function (product) {
    return product.group == 'darmani'
  })
  load_product(product_item)
}
function load_product_other() {
  let product_item = ''

  product_item = products.filter(function (product) {
    return product.group == 'other'
  })
  load_product(product_item)
}
function load_special_product() {
  let product_item = ''

  const swiper = new Swiper(".product-special-swiper", {
    slidesPerView: 4,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.fa-angle-left',
      prevEl: '.fa-angle-right',
    },
  });

  product_item = products.filter(function (product) {
    return product.status == 'off'
  })
  product_item.forEach(function (product) {
    special_product_wrapper.insertAdjacentHTML('beforeend',
      '<div class="swiper-slide">' +
      '<div class="product-item" id="' + product.id + '">' +
      '<div class="ih-item square effect6 bottom_to_top">' +
      '<a>' +
      '<div class="img">' +
      '<img src="' + product.image1 + '" alt="img" />' +
      '</div>' +
      '<div class="product-percent">' +
      product.percent + '%' +
      '</div>' +
      '<div class="info">' +
      '<img src="' + product.image2 + '" alt="" />' +
      '<div class="hover-image-nav">' +
      '<i class="material-icons tooltip add-to-basket" onclick="addProductToArray(event),open_modal_basket()" id="' + product.id + '">' +
      'shopping_cart' +
      '<span class="tooltiptext"> افزودن به سبد خرید </span>' +
      '</i>' +
      '<i class="material-icons tooltip" onclick="OpenModalProduct(event)" id="' + product.id + '">' +
      'search' +
      '<span class="tooltiptext"> مشاهده سریع </span>' +
      '</i>' +
      '<i class="fa fa-random tooltip">' +
      '<span class="tooltiptext">  مقایسه </span>' +
      '</i>' +
      '<i class="material-icons tooltip" id="favorite_product">' +
      'favorite_border' +
      '<span class="tooltiptext"> افزودن به علاقه مندی </span>' +
      '</i>' +
      '</div>' +
      '</div>' +
      '</a>' +
      '</div>' +
      '<a class="product-text" href="#">' +
      '<p>' + product.name + '</p>' +
      '</a>' +
      '<div class="product-price-wrapper">' +
      '<p class="old-product-price">' + product.price + ' تومان ' + '</p>' +
      '<p class="new-product-price">' + product.newPrice + ' تومان ' + '</p>' +
      '</div>' +
      '<div class="product-date">' +
      '<hr>' +
      '<div>' +
      '<span class="sec">  </span>' +
      '<p>ثانیه</p>' +
      '</div>' +
      '<div>' +
      '<span class="min">  </span>' +
      '<p>دقیقه</p>' +
      '</div>' +
      '<div>' +
      '<span class="hour"> 23 </span>' +
      '<p>ساعت</p>' +
      '</div>' +
      '<div>' +
      '<span class="days"> ' + product.date + ' </span>' +
      '<p>روز</p>' +
      '</div>' +
      '</div>' +
      '</div>')
  })

  secElm = $.querySelectorAll('.sec')
  minElm = $.querySelectorAll('.min')

  secElm.forEach(function (sec) {
    let secTime = 59
    let minTime = 59

    setInterval(() => {
      secTime--

      minElm.forEach(function (min) {
        min.innerHTML = minTime
      })

      if (minTime < 0) {
        minTime = 59
      }
      if (secTime < 0) {
        secTime = 59
        minTime--
        minElm.forEach(function (min) {
          min.innerHTML = minTime
        })
      }
      sec.innerHTML = secTime

    }, 1000);
  })


}

//product basket
function addProductToArray(event) {

  let product_basket = products.find(function (product) {
    return product.id == event.target.id
  })
  let findproduct = productBasket.find(function (product) {
    return product.id == event.target.id
  })
  if (findproduct) {
    findproduct.count++
  } else {
    productBasket.push(product_basket)

  }
  ShowProductOnBasketModal()

}
function ShowProductOnBasketModal() {

  continue_shopping.innerHTML = ''
  basket_modal_wrapper_product.innerHTML = ''
  basket_modal_wrapper_price.innerHTML = ''

  productBasket.forEach(function (product) {

    basket_modal_wrapper_product.insertAdjacentHTML('beforeend',
      '<div class="product-basket">' +
      '<div class="product-basket-item">' +
      '<img src="' + product.image1 + '" alt="">' +
      '<div class="product-basket-detail">' +
      '<div class="product-basket-text">' +
      '<p>' + product.name + '</p>' +
      '<i class="material-icons remove-product-basket" id="' + product.id + '" onclick="RemoveProductFromArray(event)">clear</i>' +
      '</div>' +
      '<input type="number" name="range" autocomplete="off" value="' + product.count + '" id="range-basket" onchange="updateProductCount(' + product.id + ',event)" min="1" max="100">' +
      '<div class="product-price-basket">' +
      '<span class="product-number"> 1 ×  </span>' +
      '<p>' + product.newPrice + '</p>' +
      '</div>' +
      '</div>' +
      '</div> <hr>' +
      '</div>')
  })
  sum_price_basket = 0
  productBasket.forEach(function (sumProduct) {
    sum_price_basket += sumProduct.basketPrice * sumProduct.count
  })
  basket_modal_wrapper_price.insertAdjacentHTML('beforeend',
    '<div class="all-price_product">' +
    '<div class="all-price_title">' +
    '<p> جمع کل سبد خرید: </p>' +
    '<span>' + new Intl.NumberFormat('en-US', { style: "decimal" }).format(sum_price_basket) + '</span>' +
    '</div>' +
    '<a href="#" ><button id="all-price_product-btn1"> مشاهده سبد خرید </button></a>' +
    '<a href="#" ><button id="all-price_product-btn2"> تسویه حساب </button></a>' +
    '</div>')

  if (productBasket.length === 0) {
    basket_modal_wrapper_product.innerHTML = ''
    basket_modal_wrapper_price.innerHTML = ''
    continue_shopping.insertAdjacentHTML('beforeend',
      '<div class="continue-shopping">' +
      '<i class="material-icons">remove_shopping_cart</i>' +
      '<p>هیچ محصولی در سبد خرید شما نیست</p>' +
      '<a href="shop.html"><button>بازگشت به فروشگاه</button></a>' +
      '</div>')
  }
}
function RemoveProductFromArray(event) {

  let product_basket = productBasket.filter(function (product) {
    return product.id != event.target.id
  })
  productBasket.forEach(function (product) {
    if (product.id == event.target.id) {
      product.count = 1
    }
  })
  productBasket = ''
  productBasket = product_basket
  ShowProductOnBasketModal()
}
function updateProductCount(productId, event) {

  basket_modal_wrapper_price.innerHTML = ''

  productBasket.forEach(function (product) {
    if (product.id == productId) {
      if (event.target.value < 1) {
        product.count = 1
        event.target.value = 1
      } else {
        product.count = event.target.value

      }
    }
  })
  sum_price_basket = 0
  productBasket.forEach(function (sumProduct) {
    sum_price_basket += sumProduct.basketPrice * sumProduct.count
  })
  basket_modal_wrapper_price.insertAdjacentHTML('beforeend',
    '<div class="all-price_product">' +
    '<div class="all-price_title">' +
    '<p> جمع کل سبد خرید: </p>' +
    '<span>' + new Intl.NumberFormat('en-US', { style: "decimal" }).format(sum_price_basket) + '</span>' +
    '</div>' +
    '<a href="#" ><button id="all-price_product-btn1"> مشاهده سبد خرید </button></a>' +
    '<a href="#" ><button id="all-price_product-btn2"> تسویه حساب </button></a>' +
    '</div>')
}

//comments and articles
function load_article() {
  articleList.forEach(function (article) {
    article_wrapper.insertAdjacentHTML('beforeend',
      '<div class="swiper-slide article-slide">' +
      '<div class="article-item_box">' +
      '<a class="item-box_label" href="#"><p>' + article.group + '</p></a>' +
      '<a class="item-box_title" href="#"><p>' + article.title + '</p></a>' +
      '<p class="item-box_text">' + article.description + '</p>' +
      '<a href="#" class="item-box_link"> ادامه مطلب </a>' +
      '</div>' +
      '<a class="article-item_image" href="#"><img src="' + article.image + '" alt="" ></a>' +
      '</div>')
  })
}
function load_comments() {
  userComments.forEach(function (comment) {
    comment_wrapper.insertAdjacentHTML('beforeend',
      ' <div class="comment-item swiper-slide">' +
      '<div class="comment-image">' +
      '<img src="' + comment.image + '" alt="" />' +
      '</div>' +
      '<div class="comment-rate">' +
      '<i class="fa fa-star"></i>' +
      '<i class="fa fa-star"></i>' +
      '<i class="fa fa-star"></i>' +
      '<i class="fa fa-star"></i>' +
      '<i class="fa fa-star"></i>' +
      '</div>' +
      '<div class="comment-description">' +
      '<p>' + comment.description + '</p>' +
      '</div>' +
      '<div class="comment-name">' +
      '<p class="comment-name__label">' + comment.name + '</p>' +
      '<p class="comment-name__icon">-</p>' +
      '<p class="comment-name__customer">مشتری</p>' +
      '</div>' +
      '</div>')
  })
}
function checkUserDevice() {
  let userAgent = navigator.userAgent.includes('Mobile')
  if(userAgent) {
    window.location.href = ''
    window.location.href = window.location.origin+"/mobile.html"
  }
  
}


window.addEventListener('scroll', change_header)
window.addEventListener('load', load_product_bedone_moom)
window.addEventListener('load', load_special_product)
window.addEventListener('load', load_article)
window.addEventListener('load', load_comments)
window.addEventListener('scroll', scrollTop_botton)
window.addEventListener('load', checkUserDevice)

search_icon.addEventListener('click', open_modal_search)
clear_icon.addEventListener('click', close_modal_search)

search_input.addEventListener('keyup', searchProducts)

user_icon.addEventListener('click', open_modal_user)
user_clear.addEventListener('click', close_modal_user)

basket_icon.addEventListener('click', open_modal_basket)
basket_clear.addEventListener('click', close_modal_basket)

arrow_right_slider.addEventListener('click', next_image_slider)
arrow_left_slider.addEventListener('click', prev_image_slider)

bedone_moom.addEventListener('click', load_product_bedone_moom)
tabie.addEventListener('click', load_product_tabie)
darmani.addEventListener('click', load_product_darmani)
other.addEventListener('click', load_product_other)

