import axiosConfig from "./axiosConfig";

class fakeApi {
	getMenu() {
		return axiosConfig.get("/menu");
	}
	getServices() {
		return axiosConfig.get("/services");
	}
	getPortfolio() {
		return axiosConfig.get("/portfolio");
    }
    getPortfolioId(id) {
        return axiosConfig.get(`/portfolio/{id}`)
    }
}

export default new fakeApi();