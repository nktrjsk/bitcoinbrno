{
  description = "jednadvacet-web dev shell";
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };
  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs {
          inherit system;
          config.allowUnfree = true;
        };
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [
            pkgs.nodejs_22
            pkgs.git
            pkgs.claude-code
            pkgs.patchelf
	    pkgs.gh
          ];
          shellHook = ''
            echo "jednadvacet-web dev shell ready"
            echo "Node: $(node --version)"

            WORKERD="node_modules/@cloudflare/workerd-linux-64/bin/workerd"
            if [ -f "$WORKERD" ]; then
              INTERP=$(cat ${pkgs.stdenv.cc.libc}/nix-support/dynamic-linker 2>/dev/null || echo "${pkgs.glibc}/lib/ld-linux-x86-64.so.2")
              patchelf --set-interpreter "$INTERP" \
                --set-rpath "${pkgs.lib.makeLibraryPath [ pkgs.stdenv.cc.cc pkgs.glibc ]}" \
                "$WORKERD" 2>/dev/null && echo "workerd patched" || true
            fi
          '';
        };
      }
    );
}
