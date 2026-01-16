'use client';

export default function Hero() {
    return (
        <section className="hero" id="home">
            {/* Video Background */}
            <video
                className="hero-video"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            >
                <source
                    src="https://morna.tech/wp-content/uploads/2025/03/header-reducido.mp4"
                    type="video/mp4"
                />
            </video>
        </section>
    );
}
