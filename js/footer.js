const createFooter = () => {
    let footer = document.querySelector('.footer-main');

    footer.innerHTML = `
    <footer>
        <div class="footer-content">
            <div class="footer-section-2">
                <div>
                    <iframe class="iframe"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1431.3073386391914!2d78.01191192426741!3d27.229416299746024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397479f993cdcdf3%3A0x3625c715074361d!2sFaculty%20of%20Engineering!5e0!3m2!1sen!2sin!4v1705559768222!5m2!1sen!2sin"
                    style="opacity: 0.7;" allowfullscreen="" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                    
                </div>
                <div class="contact">
                    <h3 class="contact-title" id="x">CONTACT</h3>
                    <p id="y">Address &#x3A; <span>Dayalbagh Educational Institute</span></p>
                    <span id="z">Dayalbagh, Agra, UTTAR PRADESH- 282005, INDIA</span>
                    <p id="k">Contact No. &#x3A; <span>0562-2801226</span></p>
                    <div id="a" class="hello">
                    <img class="contact-logo" src="https://cdn-icons-png.flaticon.com/512/3178/3178158.png" alt="">
                    <span>admin@dei.ac.in</span>
                    </div>
                </div>
            </div>
            <div class="footer-section-3">
                <div class="logo-bottom">
                    <img src="img/about12.png" class="bottom-brand-logo" alt="">
                    <div class="logo-bottom-name">
                        <p>Dayalbagh</p>
                        <p>Educational Institute</p>
                    </div>
                </div>
                <div class="about">
                    <h4>ABOUT US</h4>
                    <span class="description">A model Deemed to be University that believes in excellence with social relevance, imparting values-based and quality education, with the objective of reaching the last, the least, the lowest and the lost; contributing to nation and community by empowering weaker sections, women and children; building the economy through research and frugal innovation anchored in the principle of achieving more with less. </span>
                </div>
            </div>
        </div>
    </footer>
    <div class="footer-bottom">
        <span>Copyright &copy; 2024. All rights reserved.</span>
    </div>
    `;
}

createFooter();