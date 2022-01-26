/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  guides: [
    "guides/en/how_to_use_cfx_faucet",
    "guides/en/how_to_deploy_erc20_token",
    {
      type: 'link',
      label: 'Easy-to-understanding introduction of Tree-Graph',
      href: 'https://medium.com/conflux-network/understanding-the-conflux-tree-graph-consensus-algorithm-e1b57d5c3da9'
    }
  ],

  docs: [
    {
      type: "category",
      label: "Learn About Conflux",
      collapsed: false,
      items: [
        { type: "doc", id: "introduction/en/conflux_overview" },
        {
          type: "doc",
          id: "introduction/en/conflux_basics",
        },
        {
          type: 'doc',
          label: 'Internal Contracts',
          id: "conflux-rust/internal_contract/internal_contract",
          // type: 'link',
          // href: 'https://github.com/Conflux-Chain/conflux-rust/tree/master/internal_contract#readme'
        },
        {
          type: 'doc',
          id: 'introduction/en/conflux_storage'
        },
        {
          type: "doc",
          id: 'introduction/en/conflux_papers',
        }
      ],
    },
    {
      type: "category",
      label: "Run Conflux Node",
      collapsed: false,
      items: [
        { type: 'doc', id: 'run-a-node/en/how_to_get' },
        { type: "doc", id: "conflux-doc/docs/installation" },
        { type: "doc", id: "conflux-doc/docs/get_started" },
        {
          type: "doc",
          id: "conflux-doc/docs/independent_chain",
        },
        {
          type: "doc",
          id: "conflux-doc/docs/light_node",
        },
        {
          type: 'link',
          label: 'Run a Miner',
          href: 'https://forum.conflux.fun/t/conflux-tethys-gpu-mining-instruction-v1-1-3/3775'
        }
      ],
    },
    {
      type: "category",
      label: "Sending Transaction",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "conflux-doc/docs/send_transaction",
        },
        {
          type: "doc",
          id: "sending-tx/en/transaction_explain",
        },
      ],
    },
    {
      type: "category",
      label: "Smart Contract",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "contract/en/contract_introduction",
        },
      ],
    },
    {
      type: "category",
      label: "SDKs and Tools",
      collapsed: false,
      items: [
        {
          type: "doc",
          id: "sdks-and-tools/en/conflux_rpcs",
          label: "RPC Endpoints"
        },
        {
          type: "doc",
          id: "sdks-and-tools/en/conflux_sdks",
        },
        {
          type: "doc",
          id: "sdks-and-tools/en/conflux_tools",
        },
      ],
    },
    {
      type: "category",
      label: "V2 Upgrades",
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'v2-hardfork/upgrade_list'
        },
        {
          type: 'doc',
          id: 'v2-hardfork/pos_overview'
        },
        {
          type: 'doc',
          id: 'v2-hardfork/why_pos'
        },
        {
          type: 'doc',
          id: 'v2-hardfork/pos_faqs'
        },
        {
          type: 'doc',
          id: 'v2-hardfork/new_introduced_contracts'
        }
      ]
    },
    {
      type: 'link',
      label: 'Fluent Wallet Docs',
      href: 'https://fluent-wallet.zendesk.com/hc/en-001'
    },
    {
      type: 'link',
      label: 'Shuttleflow Docs',
      href: 'https://conflux-dev.github.io/conflux-dex-docs/shuttleflow/'
    },
    {
      type: 'link',
      label: 'Changelog',
      href: 'https://github.com/Conflux-Chain/conflux-rust/blob/master/changelogs/CHANGELOG-1.1.x.md'
    }
  ],

  evmSpace: [
    { type: 'doc', id: 'conflux-doc/docs/EVM-Space/intro_of_evm_space' },
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        { type: 'doc', id: 'conflux-doc/docs/EVM-Space/evm_space_networks' },
        { 
          type: 'doc', 
          id: 'v2-hardfork/evm_space_guide',
          label: 'EVM Space Guide'
        },
      ]
    },
    {
      type: 'category',
      label: 'Interact',
      collapsed: false,
      items: []
    },
    {
      type: 'category',
      label: 'Bridges',
      collapsed: false,
      items: [

      ]
    },
    {
      type: 'category',
      label: 'Compatibility',
      collapsed: false,
      items: [
        { 
          type: 'doc', 
          id: 'conflux-doc/docs/EVM-Space/evm_space_rpc_compatibility',
          label: 'JSON-RPC'
        },
        { 
          type: 'doc', 
          id: 'conflux-doc/docs/EVM-Space/evm_space_vm_compatibility',
          label: 'EVM'
        },
      ]
    },
    {
      type: 'category',
      label: 'Other',
      collapsed: false,
      items: [
        
      ]
    }
  ],

  api: [
    {
      type: "category",
      label: "Fullnode RPC",
      items: [
        { type: "doc", id: "conflux-doc/docs/json_rpc" },    
        { type: "doc", id: "conflux-doc/docs/RPCs/txpool_rpc" },
        { type: "doc", id: "conflux-doc/docs/RPCs/pos_rpc" },
        { type: "doc", id: "conflux-doc/docs/RPCs/debug_rpc" },
        { type: "doc", id: "conflux-doc/docs/RPCs/trace_rpc" },
        { type: "doc", id: "conflux-doc/docs/RPCs/common_rpc_error" },
        { type: "doc", id: "conflux-doc/docs/RPCs/send_tx_error" },
      ]
    },{
      type: "category",
      label: "Conflux OPEN-RPCs",
      items: [
        { 
          type: "link", 
          label: "cfx RPC",
          href: "https://playground.open-rpc.org/?uiSchema[appBar][ui:title]=Conflux%20RPC&uiSchema[appBar][ui:logoUrl]=https://avatars.githubusercontent.com/u/46887720&uiSchema[appBar][ui:examplesDropdown]=false&uiSchema[appBar][ui:splitView]=false&schemaUrl=https://raw.githubusercontent.com/darwintree/conflux-openrpc/main/static/conflux-openrpc.json"
        },
        { 
          type: "link", 
          label: "pos RPC",
          href: "https://playground.open-rpc.org/?uiSchema[appBar][ui:title]=Conflux%20RPC&uiSchema[appBar][ui:logoUrl]=https://avatars.githubusercontent.com/u/46887720&uiSchema[appBar][ui:examplesDropdown]=false&uiSchema[appBar][ui:splitView]=false&schemaUrl=https://raw.githubusercontent.com/darwintree/conflux-openrpc/main/static/pos-openrpc.json"
        }    
      ]
    },
    { type: "doc", id: "conflux-doc/docs/pubsub" },
    { type: "doc", id: "conflux-doc/docs/cli_sub_commands" },
    { type: "doc", id: "apis/en/node_config_example" },
    {
      type: 'category',
      label: 'Internal Contracts API',
      items: [
        {
          type: 'link',
          label: 'AdminControl',
          href: 'https://github.com/conflux-fans/internal-contracts/blob/main/docs/AdminControl.md'
        },
        {
          type: 'link',
          label: 'SponsorWhitelistControl',
          href: 'https://github.com/conflux-fans/internal-contracts/blob/main/docs/SponsorWhitelistControl.md'
        },
        {
          type: 'link',
          label: 'Staking',
          href: 'https://github.com/conflux-fans/internal-contracts/blob/main/docs/Staking.md'
        },
      ]
    },
    {
      type: "doc",
      id: "introduction/en/conflux_refs",
    },
    {
      type: 'link',
      label: 'CIPs',
      href: 'https://github.com/conflux-chain/cips'
    }
  ],
};
