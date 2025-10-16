export default function SimpleMap() {
    return (
        <section className="">
            <section className="">
            <div className="w-full h-[250px] md:h-[450px]  overflow-hidden shadow-lg">
                <iframe
                    title="Prestige Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3530.7108093347833!2d-82.68467251371672!3d27.75706446182641!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e242db96ffff%3A0x6a7fc5cfe7f891a3!2sBayshore%20Communication!5e0!3m2!1sen!2sbd!4v1760604719424!5m2!1sen!2sbd"
                    width="100%"
                    height={450}
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </section>
        </section>
    );
}
