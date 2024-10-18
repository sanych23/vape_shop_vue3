<script setup>

</script>

<template>
    <div>

        <div class="top__header top-header-one pt-30 pb-30">
            <div class="container">
                <div class="top__wrapper">
                    <a href="index.html" class="main__logo">
                        <img src="@/assets/images/logo/logo.svg" alt="logo__image">
                    </a>
                    <div class="search__wrp">
                        <input placeholder="Search for" aria-label="Search">
                        <button><i class="fa-solid fa-search"></i></button>
                    </div>
                    <div class="account__wrap">
                        <div class="account d-flex align-items-center">
                            <div class="user__icon">
                                <a href="#0">
                                    <i class="fa-regular fa-user"></i>
                                </a>
                            </div>
                            <a href="#0" class="acc__cont">
                                <span class="text-white">
                                    My Account
                                </span>
                            </a>
                        </div>
                        <div class="cart d-flex align-items-center">
                            <span class="cart__icon">
                                <i class="fa-regular fa-cart-shopping"></i>
                            </span>
                            <a href="#0" class="c__one">
                                <span class="text-white">
                                    $0.00
                                </span>
                            </a>
                            <span class="one">
                                0
                            </span>
                        </div>
                        <div class="flag__wrap">
                            <div class="flag">
                                <img src="@/assets/images/flag/us.png" alt="flag">
                            </div>
                            <select name="flag" style="display: none;">
                                <option value="0">
                                    Usa
                                </option>
                                <option value="1">
                                    Canada
                                </option>
                                <option value="2">
                                    Australia
                                </option>
                                <option value="3">
                                    Germany
                                </option>
                            </select><div class="nice-select" tabindex="0"><span class="current">
                                    Usa
                                </span><ul class="list"><li data-value="0" class="option selected">
                                    Usa
                                </li><li data-value="1" class="option">
                                    Canada
                                </li><li data-value="2" class="option">
                                    Australia
                                </li><li data-value="3" class="option">
                                    Germany
                                </li></ul></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <header class="header-section animated slideInUp">
            <div class="container">
                <div class="header-wrapper pl-65">
                    <div class="header-bar d-lg-none">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <ul class="main-menu">
                        <li class="d-none d-lg-block"><button id="openButton" class="side-bar-btn"><i class="fa-sharp text-white fa-light mr-60 fa-bars"></i></button>
                        </li>
                        <li>
                            <a href="#0">Home <i class="fa-regular fa-angle-down"></i></a>
                            <ul class="sub-menu">
                                <li class="subtwohober">
                                    <a href="index.html">
                                        Home One
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="index-light.html">
                                        Home One Light
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="index-2.html">
                                        Home Two
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="index-2-light.html">
                                        Home Two Light
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="about.html">About Us</a>
                        </li>
                        <li>
                            <a href="#0">Pages <i class="fa-regular fa-angle-down"></i></a>
                            <ul class="sub-menu">
                                <li class="subtwohober">
                                    <a href="shop.html">
                                        Shop Leftbar
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="shop-2.html">
                                        Shop Rightbar
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="shop-single.html">
                                        Shop Single
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="cart.html">
                                        Cart Page
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="checkout.html">
                                        Checkout Page
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="register.html">
                                        Register
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="login.html">
                                        Login
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="error.html">
                                        404 Error
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#0">Blog <i class="fa-regular fa-angle-down"></i></a>
                            <ul class="sub-menu">
                                <li class="subtwohober">
                                    <a href="blog.html">
                                        Blog Stander
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="blog-grid.html">
                                        Blog Grid
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="blog-list.html">
                                        Blog List
                                    </a>
                                </li>
                                <li class="subtwohober">
                                    <a href="blog-single.html">
                                        Blog Single
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="contact.html">Contact Us</a>
                        </li>
                    </ul>
                    <div class="shipping__item d-none d-sm-flex align-items-center">
                        <div class="menu__right d-flex align-items-center">
                            <div class="thumb">
                                <img src="@/assets/images/flag/picking.png" alt="image">
                            </div>
                            <div class="content">
                                <p>
                                    Picking up?
                                </p>
                                <div class="items">
                                    <select class="form__select p-0" style="display: none;">
                                        <option value="1">
                                            Select Store
                                        </option>
                                        <option value="2">
                                            Store One
                                        </option>
                                        <option value="3">
                                            Store Two
                                        </option>
                                        <option value="3">
                                            Store Three
                                        </option>
                                    </select><div class="nice-select form__select p-0" tabindex="0"><span class="current">
                                            Select Store
                                        </span><ul class="list"><li data-value="1" class="option selected">
                                            Select Store
                                        </li><li data-value="2" class="option">
                                            Store One
                                        </li><li data-value="3" class="option">
                                            Store Two
                                        </li><li data-value="3" class="option">
                                            Store Three
                                        </li></ul></div>
                                </div>
                            </div>
                        </div>
                        <div class="menu__right d-flex align-items-center">
                            <div class="thumb">
                                <img src="@/assets/images/flag/shipping.png" alt="image">
                            </div>
                            <div class="content">
                                <p>
                                    Free Shipping <br> on order <strong>over $100</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <main>
            <section class="page-banner bg-image pt-130 pb-130"  :style="{'background-image': 'url(src/assets/images/banner/inner-banner.jpg)'}">
                <div class="container">
                    <h2 class="wow fadeInUp mb-15" data-wow-duration="1.1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                        <slot name="header"></slot>
                    </h2>
                    <div class="breadcrumb-list wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.3s; animation-delay: 0.3s; animation-name: fadeInUp;">
                        <a href="index.html" class="primary-hover"><i class="fa-solid fa-house me-1"></i> Home <i class="fa-regular text-white fa-angle-right"></i></a>
                        <span>Cart</span>
                    </div>
                </div>
            </section>
        </main>


        
    </div>

    <div>
        <slot></slot>
    </div>

    <footer v-if="$slots.footer">
        <slot name="footer"></slot>
    </footer>
    <footer v-else>
        <div>
            <footer class="footer-area bg-image" data-background="@/assets/images/footer/footer-bg.jpg" style="background-image: url(&quot;assets/images/footer/footer-bg.jpg&quot;);">
                <div class="container">
                    <div class="footer__wrp pt-65 pb-65 bor-top bor-bottom">
                        <div class="row g-4">
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.1s" data-wow-delay=".1s" style="visibility: visible; animation-duration: 1.1s; animation-delay: 0.1s; animation-name: fadeInUp;">
                                <div class="footer__item">
                                    <h4 class="footer-title">Customer Service</h4>
                                    <ul>
                                        <li><a href="contact.html"><span></span>Help Portal</a></li>
                                        <li><a href="contact.html"><span></span>Contact Us</a></li>
                                        <li><a href="error.html"><span></span>Delivery Information</a></li>
                                        <li><a href="error.html"><span></span>Click and Collect</a></li>
                                        <li><a href="error.html"><span></span>Refunds and Returns</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.2s" data-wow-delay=".2s" style="visibility: visible; animation-duration: 1.2s; animation-delay: 0.2s; animation-name: fadeInUp;">
                                <div class="footer__item">
                                    <h4 class="footer-title">Get to Know Us</h4>
                                    <ul>
                                        <li><a href="about.html"><span></span>About Us</a></li>
                                        <li><a href="blog-grid.html"><span></span>News &amp; Blog</a></li>
                                        <li><a href="error.html"><span></span>Careers</a></li>
                                        <li><a href="error.html"><span></span>Investors</a></li>
                                        <li><a href="contact.html"><span></span>Contact Us</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.3s" data-wow-delay=".3s" style="visibility: visible; animation-duration: 1.3s; animation-delay: 0.3s; animation-name: fadeInUp;">
                                <div class="footer__item">
                                    <h4 class="footer-title">vapes new collections</h4>
                                    <ul>
                                        <li><a href="shop.html"><span></span>E-Cigarettes</a></li>
                                        <li><a href="shop.html"><span></span>Vape Pens</a></li>
                                        <li><a href="shop.html"><span></span>Pod Systems</a></li>
                                        <li><a href="shop.html"><span></span>Disposable Vapes</a></li>
                                        <li><a href="shop.html"><span></span>Nicotine Salt Devices</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-duration="1.4s" data-wow-delay=".4s" style="visibility: visible; animation-duration: 1.4s; animation-delay: 0.4s; animation-name: fadeInUp;">
                                <div class="footer__item newsletter">
                                    <h4 class="footer-title">get newsletter</h4>
                                    <div class="subscribe">
                                        <input type="email" placeholder="Your Email">
                                        <button><i class="fa-solid fa-paper-plane"></i></button>
                                    </div>
                                    <div class="social-icon mt-40">
                                        <a href="#0"><i class="fa-brands fa-facebook-f"></i></a>
                                        <a href="#0"><i class="fa-brands fa-twitter"></i></a>
                                        <a href="#0"><i class="fa-brands fa-linkedin-in"></i></a>
                                        <a href="#0"><i class="fa-brands fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer__copy-text pt-50 pb-50">
                        <a href="index.html" class="logo d-block">
                            <img src="@/assets/images/logo/logo.svg" alt="logo">
                        </a>
                        <p>© Copyright 2023 <a href="#0" class="primary-hover">odor</a> All Rights Reserved</p>
                        <a href="#0" class="payment d-block image">
                            <img src="@/assets/images/icon/payment.png" alt="icon">
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    </footer>

</template>

<style>

</style>