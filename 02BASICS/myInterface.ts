interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrial: () => string
    startTrial(): string,
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

const alvin: User = {
    dbId: 12,
    email: 'alvin@dev.co',
    userId: 1234,
    githubToken: 'github',
    startTrial: () => {
        return 'Trial started'
    },
    getCoupon: (name: 'alvin', off: 10) => {
        return 10
    }
}

alvin.email = 'a@dev.co'
// alvin.dbId = 13