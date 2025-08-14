export async function fetchPrograms() {
    const response = await fetch('./json/program-data.json',{
      headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
}