class Github {
    constructor() {
        this.client_id = 'f65c3fc5b7f07b4b3a8a';
        this.client_secret = '658fbf7290df519e24e82deefaa377786208f7df';
        this.repos_count = 5; //latest 5 repos
        this.repos_sort = 'created: asc'
    }

    async getUser(user) {
        // github profile info
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // github repo
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}