function cone(radius, height) {
    let volume = (Math.PI * Math.pow(radius, 2) * height) / 3
    console.log(`volume = ${volume.toFixed(4)}`);
    let inclinedHeight = Math.sqrt(Math.pow(radius,2)+Math.pow(height,2));
    let totalSurfaceArea = Math.PI*radius*inclinedHeight +Math.PI*Math.pow(radius,2)
    console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}

cone(3, 5)
