export default function parseJsonFromString(data?: string | null) {
    try {
        if (!data) return null;
        return JSON.parse(data);
    }
    catch {
        return null;
    }
} 