let $ = document

const body = $.querySelector('body')

const header_nav = $.querySelector('.nav')
const nav_image = $.querySelector('.nav-image')

const search_icon = $.querySelector('#search_header')
const search_modal = $.querySelector('.search-modal')

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

const product_modal = $.querySelector('.product-modal')

const shop_product_wrapper = $.querySelector('.shop-product-wrapper')
const show_4_product = $.querySelector('.view_comfy')
const show_3_product = $.querySelector('.fa-th')
const show_2_product = $.querySelector('.fa-th-large')

const orderbyProduct = $.querySelector('.product-orderby')

const available_product = $.querySelector("#status")
const special_product = $.querySelector('#special')

const price_min = $.querySelector('.price-min')
const price_max = $.querySelector('.price-max')

const filter_price_btn = $.querySelector('.box-btn')

const show_product_number = $.querySelectorAll('.show-product-number p')
const paginationContainer = document.querySelector('#pagination')

const box_list = $.querySelectorAll('.box-list li')

let sum_price_basket = 0
let currentPage = 1
let rowsCount = 12
let btnToggle = true

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

//modals
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
      '<a href="#"><button>بازگشت به فروشگاه</button></a>' +
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

//show products on the page
function loadShopProduct() {
  displayProductList(products, shop_product_wrapper, rowsCount, currentPage)
  setupPagination(products, paginationContainer, rowsCount) 
}
function loadShopProduct_off (product) {
  shop_product_wrapper.insertAdjacentHTML('beforeend',
  '<div class="shop-product-item">' +
  '<div class="ih-item square effect6 bottom_to_top shop-product-hover-effect">' +
  '<a>' +
  '<div class="img">' +
  '<img src="' + product.image1 + '" alt="img"/>' +
  '</div>' +
  '<div class="product-percent shop-product-percent">' +
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
  '<a class="product-text shop-produt-text" href="#"><p> ' + product.name + ' </p></a>' +
  '<div class="product-price-wrapper">' +
  '<p class="old-product-price shop-old-price">' + product.price + ' تومان ' + '</p>' +
  '<p class="new-product-price shop-new-price">' + product.newPrice + ' تومان ' + '</p>' +
  '</div>' +
  '</div>')
}
function loadShopProduct_Notavailable (product) {
  shop_product_wrapper.insertAdjacentHTML('beforeend',
      '<div class="shop-product-item gray-filter">' +
      '<div class="ih-item square effect6 bottom_to_top shop-product-hover-effect">' +
      '<a>' +
      '<div class="img">' +
      '<img src="' + product.image1 + '" alt="img"/>' +
      '</div>' +
      '<div class="info">' +
      '<img src="' + product.image2 + '" alt=""/>' +
      '</div>' +
      '</a>' +
      '</div>' +
      '<p class="product-text shop-produt-text"> ' + product.name + ' </p>' +
      '<p class="product-not-available-text"> ناموجود  </p>' +
      '</div>')
}
function loadShopProduct_available (product) {
  shop_product_wrapper.insertAdjacentHTML('beforeend',
  '<div class="shop-product-item" id="' + product.id + '">' +
  '<div class="ih-item square effect6 bottom_to_top shop-product-hover-effect">' +
  '<a>' +
  '<div class="img">' +
  '<img src="' + product.image1 + '" alt="img"/>' +
  '</div>' +
  '<div class="info">' +
  '<img src="' + product.image2 + '" alt=""/>' +
  '<div class="hover-image-nav">' +
  '<i class="material-icons tooltip add-to-basket" onclick="addProductToArray(event),open_modal_basket()" id="' + product.id + '">'+
  'shopping_cart <span class="tooltiptext"> افزودن به سبد خرید </span></i>' +
  '<i class="material-icons tooltip" onclick="OpenModalProduct(event)" id="' + product.id + '">'+
  'search <span class="tooltiptext"> مشاهده سریع </span></i>' +
  '<i class="fa fa-random tooltip"><span class="tooltiptext"> مقایسه </span></i>' +
  '<i class="material-icons tooltip" id="favorite_product">favorite_border<span class="tooltiptext">افزودن به علاقه مندی </span></i>' +
  '</div>' +
  '</div>' +
  '</a>' +
  '</div>' +
  '<a class="product-text shop-produt-text" href="#">' +
  '<p> ' + product.name + ' </p>' +
  '</a>' +
  '<p class="product-price shop-product-price"> ' + product.price + ' تومان ' + ' </p>' +
  '</div>')
}
function displayProductList (allproduct, productContainer, rowsCount, currentPage) {
  productContainer.innerHTML = ''

  let endIndex = rowsCount * currentPage
  let startIndex = endIndex - rowsCount

  let paginatedProduct = allproduct.slice(startIndex, endIndex)

  paginatedProduct.forEach(function (product) {
    if (product.status == 'off') {
      loadShopProduct_off (product)
    } else if (!product.available) {
      loadShopProduct_Notavailable(product)
    } else {
      loadShopProduct_available(product)
    }
  })
  let shop_product_item = $.querySelectorAll('.shop-product-item')
  let shop_product_text = $.querySelectorAll('.shop-produt-text')
  let shop_product_price = $.querySelectorAll('.shop-product-price')
  let shop_old_price = $.querySelectorAll('.shop-old-price')
  let shop_new_price = $.querySelectorAll('.shop-new-price')
  let shop_product_percent = $.querySelectorAll('.shop-product-percent')
  let hover_image_nav = $.querySelectorAll('.hover-image-nav')

ShowProduct(shop_product_item,shop_product_text,shop_product_price,shop_old_price,shop_new_price,shop_product_percent,hover_image_nav)
}

//Pagination
function setupPagination (allproduct, pagesContainer, rowsCount) {
 pagesContainer.innerHTML = ''

  let pageCount = Math.ceil(allproduct.length / rowsCount)

  for (let i = 1 ; i < pageCount + 1 ; i++) {
      let btn = paginationButtonGenerator(i, allproduct)
      pagesContainer.appendChild(btn)
  }

}
function paginationButtonGenerator (page, allproduct) {
  let button = $.createElement('button')

  button.innerHTML = page

  if (page === currentPage) {
      button.classList.add('active')
  }

  button.addEventListener('click', function () {
      currentPage = page
      displayProductList(allproduct, shop_product_wrapper, rowsCount, currentPage)

      let prevPage = $.querySelector('button.active')
      prevPage.classList.remove('active')

      button.classList.add('active')
  })

  return button 
}

//how to show products
function ShowProduct  (shop_product_item,shop_product_text,shop_product_price,shop_old_price,shop_new_price,shop_product_percent,hover_image_nav) {
  show_4_product.addEventListener('click',function(){
    show_4_product.style.color = 'black'
    show_3_product.style.color = '#777'
    show_2_product.style.color = '#777'
    Show4Product(shop_product_item,shop_product_text,shop_product_price,shop_old_price,shop_new_price,shop_product_percent,hover_image_nav,hover_image_nav)
  })
  show_3_product.addEventListener('click',function(){
    show_4_product.style.color = '#777'
    show_3_product.style.color = 'black'
    show_2_product.style.color = '#777'
    Show3Product(shop_product_item,shop_product_text,shop_product_price,shop_old_price,shop_new_price,shop_product_percent,hover_image_nav)
  })
  show_2_product.addEventListener('click',function(){
    show_4_product.style.color = '#777'
    show_3_product.style.color = '#777'
    show_2_product.style.color = 'black'
    Show2Product(shop_product_item,shop_product_text,shop_product_price,shop_old_price,shop_new_price,shop_product_percent,hover_image_nav)
  })
}
function Show4Product (shop_product_item,shop_product_text,shop_product_price,shop_old_price,shop_new_price,shop_product_percent,hover_image_nav) {
    shop_product_item.forEach(function(product){
        product.style.width = '208px'
        product.style.height = '290px'
    })
    shop_product_text.forEach(function(product){
        product.style.fontSize = '14px'
    })
    shop_product_price.forEach(function(product){
        product.style.fontSize = '14px'
    })
    shop_old_price.forEach(function(product){
        product.style.fontSize = '12px'
    })
    shop_new_price.forEach(function(product){
        product.style.fontSize = '14px'
    })
    shop_product_percent.forEach(function(product){
        product.style.bottom = '180px'
        product.style.fontSize = '13px'
    })
    hover_image_nav.forEach(function(product){
      product.className = ''
      product.className = 'hover-image-nav hover-4-product'
    })
}
function Show3Product (shop_product_item,shop_product_text,shop_product_price,shop_old_price,shop_new_price,shop_product_percent,hover_image_nav) {
    shop_product_item.forEach(function(product){
        product.style.width = '270px'
        product.style.height = '350px'
    })
    shop_product_text.forEach(function(product){
        product.style.fontSize = '16px'
    })
    shop_product_price.forEach(function(product){
        product.style.fontSize = '15px'
    })
    shop_old_price.forEach(function(product){
        product.style.fontSize = '13px'
    })
    shop_new_price.forEach(function(product){
        product.style.fontSize = '15px'
    })
    shop_product_percent.forEach(function(product){
        product.style.bottom = '232px'
        product.style.fontSize = '14px'
    })
    hover_image_nav.forEach(function(product){
        product.className = ''
        product.className = 'hover-image-nav hover-3-product'
    })
}
function Show2Product (shop_product_item,shop_product_text,shop_product_price,shop_old_price,shop_new_price,shop_product_percent,hover_image_nav) {
    shop_product_item.forEach(function(product){
        product.style.width = '417px'
        product.style.height = '500px'
    })
    shop_product_text.forEach(function(product){
        product.style.fontSize = '18px'
    })
    shop_product_price.forEach(function(product){
        product.style.fontSize = '17px'
    })
    shop_old_price.forEach(function(product){
        product.style.fontSize = '15px'
    })
    shop_new_price.forEach(function(product){
        product.style.fontSize = '17px'
    })
    shop_product_percent.forEach(function(product){
        product.style.bottom = '385px'
        product.style.fontSize = '16px'
    })
    hover_image_nav.forEach(function(product){
      product.className = ''
      product.className = 'hover-image-nav hover-2-product'
    })
}


//show available or special products when click checkbox
function ShowAvailableProducts() {
  show_3_product.style.color = 'black'
  show_4_product.style.color = '#777'
  show_2_product.style.color = '#777'

  special_product.checked = false

  if(available_product.checked) {
   let AvailableProducts = products.filter(function(product){
     return product.available == true
    })
   displayProductList(AvailableProducts, shop_product_wrapper, rowsCount, currentPage)
   setupPagination(AvailableProducts, paginationContainer, rowsCount)

  } else {
    shop_product_wrapper.innerHTML = ''
    loadShopProduct()
  }
}
function ShowSpecialProducts() {
  show_3_product.style.color = 'black'
  show_4_product.style.color = '#777'
  show_2_product.style.color = '#777'

  available_product.checked = false

  if(special_product.checked) {
    let SpecialProducts = products.filter(function(product){
      return product.status == 'off'
     })
   displayProductList(SpecialProducts, shop_product_wrapper, rowsCount, currentPage)
   setupPagination(SpecialProducts, paginationContainer, rowsCount)

  } else {
    shop_product_wrapper.innerHTML = ''
    loadShopProduct()
  }
}

// show prdocuts between maxPrice and minPrice
function changeValueInputMin(event) {
  price_min_text = $.querySelector('.box-price-min')
  price_min_text.innerHTML = new Intl.NumberFormat('en-US', { style: "decimal" }).format(event.target.value) + ' تومان' 
}
function changeValueInputMax(event) {
  price_max_text = $.querySelector('.box-price-max')
  price_max_text.innerHTML = new Intl.NumberFormat('en-US', { style: "decimal" }).format(event.target.value) + ' تومان'
}
function ShowProductBetweenMaxAndMinPrice() {
  
  special_product.checked = false
  available_product.checked = false

  if(btnToggle) {
    filter_price_btn.innerHTML = 'حذف قیلتر'
    btnToggle = false

    let productFilter = products.filter(function(product){
      return product.basketPrice >= price_min.value && product.basketPrice <= price_max.value && product.available
   })
   displayProductList(productFilter, shop_product_wrapper, rowsCount, currentPage)
   setupPagination(productFilter, paginationContainer, rowsCount) 
  } else {
    filter_price_btn.innerHTML = 'فیلتر'
    btnToggle = true

    displayProductList(products, shop_product_wrapper, rowsCount, currentPage)
    setupPagination(products, paginationContainer, rowsCount) 
  }
}

//How many products to display on the site
function ShowHowManyProductsOnTheMainPage() {
  show_product_number.forEach(function(number){
    number.addEventListener('click',function(event){
      currentPage = 1

    show_product_number.forEach(function(number){
      number.style.color = '#777'
    })

    event.target.style.color = 'black'
    rowsCount = event.target.innerHTML
    if(special_product.checked) {
      ShowSpecialProducts()
    } else if (available_product.checked) {
      ShowAvailableProducts()
    } else {
      loadShopProduct()
    }
    })
  })
}

//Show products of each category
box_list.forEach(function(item){
  item.addEventListener('click',function(event){
   let productPacking =  products.filter(function(product){
    return product.group == event.target.id
   })
   displayProductList(productPacking, shop_product_wrapper, rowsCount, currentPage)
   setupPagination(productPacking, paginationContainer, rowsCount)
  })
 
})

//sort products by most expensive, cheapest and most popular
function OrderProducts() {
  switch(orderbyProduct.value) {
    case 'popularity':
      displayProductList(products, shop_product_wrapper, rowsCount, currentPage)
      setupPagination(products, paginationContainer, rowsCount)
    break;

    case 'price-min':
      let minToMaxProduct = []
      products.forEach(function(product){
        if(product.available) {
          minToMaxProduct.push(product.basketPrice) 
        }
      })
      minToMaxProduct.sort(function(a, b){return a - b})
      orderProductGenerator(minToMaxProduct)
    break;

    case 'price-max':
      let maxToMinProduct = []
      products.forEach(function(product){
        if(product.available) {
          maxToMinProduct.push(product.basketPrice) 
        }
      })
      maxToMinProduct.sort(function(a, b){return b - a})
      orderProductGenerator(maxToMinProduct)
    break;
  }
}
function orderProductGenerator(priceProduct) {
  let OrderProduct = []

  priceProduct.forEach(function(price){
    products.forEach(function(product){
      if(price == product.basketPrice) {
        OrderProduct.push(product)
      }
    })
  })
    displayProductList(OrderProduct, shop_product_wrapper, rowsCount, currentPage)
    setupPagination(OrderProduct, paginationContainer, rowsCount)
}

window.addEventListener('scroll', change_header)
window.addEventListener('scroll', scrollTop_botton)
window.addEventListener('load', loadShopProduct)
window.addEventListener('load', ShowHowManyProductsOnTheMainPage)

search_icon.addEventListener('click', open_modal_search)
clear_icon.addEventListener('click', close_modal_search)

user_icon.addEventListener('click', open_modal_user)
user_clear.addEventListener('click', close_modal_user)

basket_icon.addEventListener('click', open_modal_basket)
basket_clear.addEventListener('click', close_modal_basket)

available_product.addEventListener('change', ShowAvailableProducts)
special_product.addEventListener('change', ShowSpecialProducts)

price_min.addEventListener('input', changeValueInputMin)
price_max.addEventListener('input', changeValueInputMax) 
filter_price_btn.addEventListener('click',ShowProductBetweenMaxAndMinPrice)
orderbyProduct.addEventListener('change', OrderProducts)



