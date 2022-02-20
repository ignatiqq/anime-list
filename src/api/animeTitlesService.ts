
class animeTitlesService {

    async getTopAnimes() {
        const response = fetch(`${process.env.REACT_APP_API_URL}/top/anime`);
    }

}

export default new animeTitlesService();