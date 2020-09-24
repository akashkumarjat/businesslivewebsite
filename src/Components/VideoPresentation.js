import React from 'react'
import '../Scss/VideoPresentation.scss';
function VideoPresentation() {
    return (
        <>
            <section id="video" className="Video_Presentation_section">
                <div class="Video_content">
                    <h1>Our Video Presentation.</h1>
                    <h2>You Should Know More About Us</h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
                    </p>

                    <div class="video-btn">
                        <span>
                            <i fill="currentColor" >
                                <svg fill="currentColor" height="24" width="24" viewBox="0 0 640 1792" ><path d="M576 896q0 26-19 45l-448 448q-19 19-45 19t-45-19-19-45v-896q0-26 19-45t45-19 45 19l448 448q19 19 19 45z"></path></svg>
                            </i>
                        </span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default VideoPresentation
