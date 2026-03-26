'use client';

export default function Hero() {
    return (
        <section className="hero" id="home">
            {/* Video Background - Desktop */}
            <video
                className="hero-video desktop-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            >
                <source
                    src="/img/header-reducido.mp4"
                    type="video/mp4"
                />
            </video>

            {/* Video Background - Mobile */}
            <video
                className="hero-video mobile-video"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
            >
                <source
                    src="/img/hero-mobile.mp4"
                    type="video/mp4"
                />
            </video>

        </section>
    );
}

