function extractFile(path){
    console.log(path)
    let fileNameIndexStart  = path.lastIndexOf('\\')+1
    // console.log(fileNameIndexStart)
    let fileExtensionStartIndex = path.lastIndexOf('.')+1
    // console.log(fileExtensionStartIndex)

    let fileNameIndexEnd = fileExtensionStartIndex-1
    // console.log(fileNameIndexEnd)

    console.log(`File name: ${path.substring(fileNameIndexStart,fileNameIndexEnd)}`)
    console.log(`File extension: ${path.substring(fileExtensionStartIndex)}`)


}
extractFile('C:\\Internal\\training-internal\\Template.pptx')
