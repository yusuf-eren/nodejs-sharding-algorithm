# Database Sharding with Static Shard Number

```shell
NOTE:
this algorithm is not a best practice.
I created this by assuming that the shard count is static.
Best practice is Consistent Hashing algorithms for dynamic shard count.
```

# Why I built that?
I was reading System Design Interview book and wanted to try sharding on code.
I will be creating a consistent hashing algorithm for dynamic shard count in my next repositories on Github.

---

## How to run?
```shell

# install dependencies
npm install

# run the db
npm run start:db

# OPEN A NEW TERMINAL
# and run the server
npm run start:server
```