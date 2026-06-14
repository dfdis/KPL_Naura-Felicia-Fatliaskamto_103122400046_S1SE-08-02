function parseRobots(text) {
    if (typeof text !== 'string') {
    throw new TypeError('Input harus berupa string');
    }

    const lines = text.split('\n');

    const result = {
        userAgents: {}
    };

    let currentAgents = [];

    for (let rawLine of lines) {
        const line = rawLine.trim();


        if (!line || line.startsWith('#')) continue;

        const [key, ...rest] = line.split(':');
        const value = rest.join(':').trim();

        const lowerKey = key.toLowerCase();

        if (lowerKey === 'user-agent') {
            const agent = value;

            if (!result.userAgents[agent]) {
                result.userAgents[agent] = {
                    allow: [],
                    disallow: []
                };
            }

            currentAgents = [agent];
        }

        else if (lowerKey === 'allow') {
            currentAgents.forEach(agent => {
                result.userAgents[agent].allow.push(value);
            }
        );
    }

    else if (lowerKey === 'disallow') {
        currentAgents.forEach(agent => {
            result.userAgents[agent].disallow.push(value);
        });
    }

    else if (lowerKey === 'sitemap') {
        if (!result.sitemap) {
            result.sitemap = [];
        }
        result.sitemap.push(value);
    }
    }

    return result;
}

module.exports = { parseRobots };