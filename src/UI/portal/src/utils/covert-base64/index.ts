export default function convertFileToBase64(blob: Blob): Promise<string> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onloadend = () => {
            const base64data = reader.result;
            resolve(base64data as string);
        };

        reader.onerror = reject;

        reader.readAsDataURL(blob);
    });
};