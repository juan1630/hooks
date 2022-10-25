export const fileUpload = async (file) => {

    if(!file) throw new Error('No hay archivos seleccionados');

    const formData = new FormData();
    const urlImg = 'https://api.cloudinary.com/v1_1/juanpatron1630/upload';

    formData.append('upload_preset','journal-react');
    formData.append('file', file);

    try{

        const resp = await fetch( urlImg, {
            method: 'POST',
            body: formData
        });

        if(  !resp.ok  ) throw new Error('No se pudo subir');
        
        const cloudResp = await resp.json();

        const  { secure_url  } = cloudResp;

        return secure_url;

    }catch (error) {
        console.log(error);
        throw new Error( error.message );
    }

};