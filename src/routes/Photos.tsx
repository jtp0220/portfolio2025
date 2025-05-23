const images = Object.values(import.meta.glob('../assets/gallery/*.jpg', {eager: true})).map((mod: any )=> mod.default);

function PhotoFrame({src}:{src:string}){
    return (
        <div className="photo-wrapper">
            <img src={src} alt="" onContextMenu={(e) => e.preventDefault()} />
        </div>
    )
}

function Photos(){
    return (
        <section id="photos">
            <h2>Shot on Canon 40D</h2>
            <div className="gallery">
                {images.map((src, index) => (
                    <PhotoFrame key={index} src={src} />
                ))}
            </div>
        </section>
    )
}

export default Photos;