# SnapMobile-Filter

# Usage

Include this private module by adding the following under `dependencies` in `package.json`, and run `npm install`.

    "snapmobile-flashmessage": "git+ssh://@github.com/SnapMobileIO/SnapMobile-Filter.git",

To configure, add the following to `app.js`:

    import 'snapmobile-filter';
    
Finally, add 'FilterModule' as a dependency for the angular app.

# Updating

Make any changes in `/src`.

Once changes are completed, run `gulp dist` to process JavaScript files and add to `/dist`.
