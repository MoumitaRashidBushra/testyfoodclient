import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="bg-black">
                <div class=" container lg:container  lg:mx-auto px-10 lg:px-32  ">


                    <div class="grid grid-cols-2 lg:grid-cols-3 gap-4  lg:gap-10 pb-12 ">

                        <div class="col mt-16 text-white ">
                            <p class="font-bold">Quick Links</p>
                            <p class="mt-4">Home</p>
                            <p class="mt-3 mb-3">About Us</p>
                            <p>Blog</p>
                            <p class="mt-3 mb-3">Privacy Policy</p>
                        </div>

                        <div class="col mt-16 text-white  ">
                            <p class="font-bold">Our Service</p>
                            <p class="mt-4">Life Insurance</p>
                            <p class="mt-3 mb-3">Car Insurance</p>
                            <p>Health Insurance</p>
                            <p class="mt-3 mb-3">House Insurance</p>
                        </div>

                        <div class="col mt-16 text-white ">
                            <p class="font-bold">Help</p>
                            <p class="mt-4">FAQs</p>
                            <p class="mt-3 mb-3">Contact Us</p>

                        </div>





                    </div>
                    <div class="text-center pb-20 text-white">
                        <h1>© 2027 UIDesign.to - All rights reserved.</h1>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;