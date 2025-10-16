import React from 'react';
import { LiaShippingFastSolid, LiaGiftSolid } from "react-icons/lia";
import { PiKeyReturnLight } from 'react-icons/pi';
import { BsWallet2 } from 'react-icons/bs';
import { BiSupport } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { IoChatboxOutline } from 'react-icons/io5';
import Button from '@mui/material/Button'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Footer = () => {
    return (
        <footer className='py-6 bg-[#fafafa]'>
            <div className='container'>
                {/* Features Section */}
                <div className='flex flex-wrap items-center justify-center gap-4 md:gap-2 py-8 pb-8'>
                    <div className='col flex items-center justify-center flex-col group w-[45%] sm:w-[30%] md:w-[18%] lg:w-[15%] mb-4 md:mb-0'>
                        <LiaShippingFastSolid className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
                        <h3 className='text-[14px] md:text-[16px] font-[600] mt-3 text-center'>Free Shipping</h3>
                        <p className='text-[11px] md:text-[12px] font-[500] text-center'>For all Orders Over $100</p>
                    </div>
                    <div className='col flex items-center justify-center flex-col group w-[45%] sm:w-[30%] md:w-[18%] lg:w-[15%] mb-4 md:mb-0'>
                        <PiKeyReturnLight className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
                        <h3 className='text-[14px] md:text-[16px] font-[600] mt-3 text-center'>30 Days Return</h3>
                        <p className='text-[11px] md:text-[12px] font-[500] text-center'>For an Exchange Product</p>
                    </div>
                    <div className='col flex items-center justify-center flex-col group w-[45%] sm:w-[30%] md:w-[18%] lg:w-[15%] mb-4 md:mb-0'>
                        <BsWallet2 className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
                        <h3 className='text-[14px] md:text-[16px] font-[600] mt-3 text-center'>Secured Payment</h3>
                        <p className='text-[11px] md:text-[12px] font-[500] text-center'>Payment Cards Accepted</p>
                    </div>
                    <div className='col flex items-center justify-center flex-col group w-[45%] sm:w-[30%] md:w-[18%] lg:w-[15%] mb-4 md:mb-0'>
                        <LiaGiftSolid className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
                        <h3 className='text-[14px] md:text-[16px] font-[600] mt-3 text-center'>Special Gifts</h3>
                        <p className='text-[11px] md:text-[12px] font-[500] text-center'>Our First Product Order</p>
                    </div>
                    <div className='col flex items-center justify-center flex-col group w-[45%] sm:w-[30%] md:w-[18%] lg:w-[15%] mb-4 md:mb-0'>
                        <BiSupport className='text-[40px] transition-all duration-300 group-hover:text-primary group-hover:-translate-y-1' />
                        <h3 className='text-[14px] md:text-[16px] font-[600] mt-3 text-center'>Support 24/7</h3>
                        <p className='text-[11px] md:text-[12px] font-[500] text-center'>Contact us Anytime</p>
                    </div>
                </div>
                <br />

                <hr />

                {/* Main Footer Content */}
                <div className='footer flex flex-col lg:flex-row py-8 gap-6 lg:gap-0'>
                    {/* Part 1 - Contact Us */}
                    <div className='part1 w-full lg:w-[25%] lg:border-r border-[rgba(0,0,0,0.1)] lg:pr-6'>
                        <h2 className='text-[18px] font-[600] mb-4'>Contact us</h2>
                        <p className='text-[14px] font-[400] pb-4'>Classyshop - Mega Super Store<br />
                            507-Union Trade Centre
                            France
                        </p>

                        <Link className='link text-[13px]' to='mailto:someone@example.com'>sales@sid.com</Link>
                        <span className='text-[22px] font-[600] block w-full mt-3 mb-5 text-primary'>(+91) 7741-973-805</span>


                        <div className='flex items-center gap-2'>
                            <IoChatboxOutline className='text-[40px] text-primary' />
                            <span className='text-[16px] fony-[600]'>Online Chat<br />
                                Get Expert Help
                            </span>
                        </div>
                    </div>

                    {/* Part 2 - Products & Company */}
                    <div className='part2 w-full lg:w-[40%] flex flex-col sm:flex-row lg:pl-8 gap-6 sm:gap-0'>
                        <div className='part2_col1 w-full sm:w-[50%]'>
                            <h2 className='text-[18px] font-[600] mb-4'>Products</h2>
                            <ul className='list'>
                                <li className='list-none text-[14px] w-full mb-1'><Link to='/' className='link'>Prices drop</Link></li>
                                <li className='list-none text-[14px] w-full mb-1'><Link to='/' className='link'>New Products</Link></li>
                                <li className='list-none text-[14px] w-full mb-1'><Link to='/' className='link'>Best Sales</Link></li>
                                <li className='list-none text-[14px] w-full mb-1'><Link to='/' className='link'>Contact Us</Link></li>
                                <li className='list-none text-[14px] w-full mb-1'><Link to='/' className='link'>Sitemap</Link></li>
                                <li className='list-none text-[14px] w-full mb-1'><Link to='/' className='link'>Stores</Link></li>
                            </ul>
                        </div>

                        <div className='part2_col2 w-full sm:w-[50%]'>
                            <h2 className='text-[18px] font-[600] mb-4'>Our Company</h2>
                            <ul className='list'>
                                <li className='list-none text-[14px] w-full mb-1'><Link to='/' className='link'>Delivery</Link></li>
                                <li className='list-none text-[14px] w-full mb-1'><Link to='/' className='link'>Legal Notice</Link></li>
                                <li className='list-none text-[14px] w-full mb-1'><Link to='/' className='link'>Terms and Conditions of Use</Link></li>
                                <li className='list-none text-[14px] w-full mb-1'><Link to='/' className='link'>Secure Payment</Link></li>
                                <li className='list-none text-[14px] w-full mb-1'><Link to='/' className='link'>Login</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Part 3 - Newsletter */}
                    <div className='part2 w-full lg:w-[35%] flex lg:pl-8 flex-col lg:pr-8'>
                        <h2 className='text-[18px] font-[600] mb-4'>Subscribe to Newsletter</h2>
                        <p className='text-[13px]'>Subscribe to our latest newsletter to get news about special discounts.</p>

                        <form className='mt-5'>
                            <input type='text' className='w-full h-[45px] border outline-none pl-4 pr-4 pb-2 rounded-sm mb-4 focus:border-[rgba(0,0,0,0.3)]' placeholder='Your Email Address' />
                            <Button className='btn-org'>SUBSCRIBE</Button>

                            <FormControlLabel control={<Checkbox defaultChecked />} label='I agree to the terms and conditions and the privacy policy' className='pb-2' />
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;