let i, j, sum, inspect, inspect2, inspect3; 
let input, inputArray, elementArray,  firstHalfOfElementArray, secondHalfOfElementArray, elementArray2, elementArray3, intersectArray;   
let valueArray, value;


firstHalfOfElementArray = [];
secondHalfOfElementArray = [];
input = "VdzVHmNpdVmBBCpmQLTNfTtMhMJnhFhTTf  FgqsZbqDDFqRrhhJnsnLMTfhJG  bRRRPrRRwSwbDqgjvDZbRbQzpzmQVWCzzBdvQBFCzlWV  GcDdRdvhRssRhGDdShCRtqWjlQzqWgqzNfNjfQWWjt  mwwnnPFwmVrPmJmzfNzqCjQCbgVlgC  nPnHHLrHwmJTrCTJpThBscBSdSLGZvZBvRhZ  RVQQcVlcSRclfZCCCnMJJTSTnC  NdHwjdwjbBBZrrZrbJDZJJ  wmhjGGBGwwmjtjtdPlfRcpVQlhRppVJF  pplbNBPPrppllrFNbpvppSTcwqcWFhTTShhJDTchqd  RGzRfLjjmZmfmwLftTWhStStJWTdWmDm  nfsMjQssnpPvNnrPrw  SjjBgllzlQjBZvlBBgcFbgJHsMhJqbMHPggJbM  hRLRVDdRRWnJqnnHTqMCnH  GRfLddRRpVhNVrWSjwQQzSzcGSBQSc  qMwNqqBdQdnTVBBVVhMVnVFzTHPggTPjGRDzvPTjjmvPDj  sbSrWJpStrtPtRPttzmmDD  pfbJJcbsrcLpWLllsnFmcqcwQncnQQqVNQ  RBTWCMwCwdZThPZcZZ  pVmVpHLFFFHHVgVmvNmHSQNvddlPPzZJMPcdhclhjczLdZMP  vnnNnFStGMRDwWnn  fWDdJTpDJzdBBBdmDSbSRHRwPqbPbHgSbz  slQtQvNsMVvrrgPRgRglnhwWPH  sGMMQFrsjvNMfWmdpfFDFZBf  vnMRMWCMJwWWwwWPjmSdVmLdzvVbLrhL  HsNfDHQlZpNqfQzbLbrqhjLmVdjd  dfDZQsNpstHHHptZDDtZWgngtgBMPMMRwCPtBBGW  HwQwwbwFNWHwHBVFQFLQzRznZnSzcjjjpPbcPpSP  vTfTJsCmsftJZmTSSdPvzdjRSvPdjd  TrGtTJfmGDfDhrhJJJsqrZhDBFLHHLLQWFwwlWBVBBVwgLFD  FFTJRLccQgmTbSsbGm  PBPPqCvCwqwhQQVhQngmVmSgglmGnHbnmb  zqthvtQPBfCCzPwQPtwQzPwNLfNRFNLdLRLFRFFNLFdFdW  nszjQnsPwjznzCCrhJqvjqhmBv  tFWdHGWFGtctlNNpZBBhmqTrrbWqvTBT  dlFtcpHDVVVHFdNGHGpGfQgsPDzSMsQwwPwgLLBQ  TzQqTJGvnnSzqrWTnvfbbcflQcVltfcCMPVM  jFjNZFFJLpFwmBwblcpptcVtfbbVlR  jmmJdBBLNdGDWDDrdzqn  pzddqQmGgbqgGpbJmmdnLZDCRZnZvFlLRZLSlLRT  rVwchcBBMwVBHhHTZCTSGSCRTZlTDr  HtccPfjfBhMtVBGHWpNqJdJdpjNJppWz  WThTWWhtPbZRvvWbbvRTSRMjVRLLgFssgLpVsfSF  JdwrlJcCwfzdqwwjsjzpLMgVsMFgML  lQrwHNGJHClvTmfhBmPQmt  lbRLhcLRpLJzgdGddF  qvhwqDDCVtBDVhfMVGFnzGGzTBnGzGGgFg  VjCwCWCMtjVDtChvQhtffcSmHpNWrrcHZHHZpplWbp  DJVDVdvpmZdPgrCbgbgCJC  lzczcWwwznGhBgPSvTlCrNgqNC  wGzzQhzGGsBBGRBcQwGwnwjmmRHpRfmmMpppMjjHDvLL  HJjJQWjFmmWtFmJTMchghhDwNMhVMWML  SznPSRfRSSPdrrPSShbDVhbLPwcwGGwVNh  ddRfzdRrCrRsZDSnFjspvFvqFqFqTvJt  lflfjQfjvljfbfMLTTDCmHNLNVbL  HSJnRrrJZJssnGRrnsrcqqRnDCLBMhVCTLVLhVNVJBBBhhBm  SsrGGqqnSsWSnnqWHSrPfzftvFdvWlwfQgQwWvzz  nQlsGnFGwwqNJWmJJjpplt  HMTLPTRdvsTCCThDCZdLdLDNNpJBWJbjJMpBmbtNptBWmm  DLCzPzTzZDdLdGSGfSGrsnQGzr  LNPPLHNPHQNQSBFDWDPgggFv  hszfWCWJhrBMsSSBgvFD  GGZjfmJTjmZfrJrZrZJRGwNQnlLNHWjLVjlwdVNHpV  BdNVdTcGVclmTwrTnwPwrHCr  zttBWzfLsCggHPwDrf  szsWSMbWzzbqBbzJjtjsvMzzvdmdVpGllpcRNZZhmRpZcGGc  CjdbMmmmZFnzzgHlttGBVqtBGtsldG  LvPPWNcFSSRslWhBsllT  ppccvLPpcSNwLLwrDNNpLvwJHCMDmbCJbFzgmZZmFgbgnM  TTNRwZqhcTTjsNTTsmrJlvrmmmqqHSrlJH  fLQCCdtcfCDDVbVVQdFbQbdJHMHrJHrHnMllHdMHPrMdln  WfQLQWWDbwRTWcRssN  HQGQWHPDHNjMNQGNWNTWCvZllzqFZqzvvzhCtvFj  DfgwdgfcFpchztvt  sRggdwwVdgmnSTnnDBPBNWLn  WbCZCfTVTTJjSwGdWNDGGw  MMRqggMsqhlmlhrssHgRnRmRvdzdczvdNGNLzScGDrNzrLNc  lRqsnRhmqqQnQpgQMlgDqRfBTJVFbJZQtBCbZQJVZFFb  JnhQcCnmLDsmgmgr  bbMZppRFGGRPfBMMRGMZssTTrLlLfsLlVLdsLsdn  GZGSpPGMZtGGPFFRGBCwhvwjjcnJctvQcvHq  vvrPrHZMGJNRMnqn  BVChWWcDVWsBwCWwGrJNhRLJJnJtLqnq  cjDfcfpWWsfWccBsHgPgrPTdpZbbgggv  GshtVtVtjSCVtVvVGtlVvFZLMvLRZmHmZwbLwZdLdZmR  JWzNDQzjcgJgQBJgzgMwLLHZZcdPwRLwRdHZ  QWTppBWfDrrNBTTfffhFCpVSjnhCGsFtsqSl  nmbCnzHHNzCjCJHJNSCWHLBLrvBrrSGRBDhrDRLrGL  TVtPllwcgdmTRhLQTQhT  fdFtccFcpPmggfdfNzHzCMsbCnWnJs  fMgddvjgRRvjvjVJVdTlZGGtGnrlnqTccNjl  HHSFSWSmmpbBpZlGncrNGbNtrn  WDWBDDBDBDCwPBWBDWNQDgzvVvLRvsVLRwvwdJVLwL  ZSmmvcpsmcJmJvqgBZgZqqtCtZjl  WhDwhFSDgtBFjnFg  rTrSTLWTTHNMNwNrMVddwNNhsmJGQcRsRcJGsJzQJsrzPsPm  GBtLmPsCQqsGqgghZHDzzgLbFz  zjjVTzTlRjRJfznrvrfpnNhFSghbbNFgHrbHZbDHbH  vpfcTJVpcVlfcQPMPCGzCBsd  HMhZNffcPZfNMrzjjFdGcJDjvJ  VSBVVLlSQQmTVSWpSQzDrHzTTvDvFjFdGGzT  mQSplVHWbHLSgWQnShNwsZMZPfbsNCRNCt  MMqvDzLwZzlMqQfdGWPfgPffPglH  ShTcJshsrRdnrdfrrfHp  VVRtFhsCJVJVvwQqDdbDQd  dmnNMlFNvmvljnbpMWNDFQvfQJJGvfPCfHGgQQgcJg  bRVzLBSSTRBRBBrwTrVtRwCfcGHcsJgJgzgGsggHCzcC  ZbtVTTrrqrSSVwhqqwBRwFWMDFNdjdZpWjdDDppjMW  MTzqtbLtwFzJgbHgfbdWWH  VMNBjNVjvNfhhhhfNPhP  jmGMvlDZZnVMtzlwzqqCpwFt  PpzGspGmpPsFLrTnTLzzBg  QCWvfjfWjRPFZgrvqrBvTg  wwNRCNQQVNRWjNWfQbHCCClHGDGJdGhpdhtPGhltDlJD  dhbpGzhllzGlPvnzNcvtNVnc  gcFMsTJDMMwrZqfjjqvvfnPtqJ  sWRWTRFwrTgLDDFWgMsTlpSlpbSCdWWdcbmpChGd  QccdFFFcFbcQPQPHMgpPMp  NJlNSSMLDfJfmlSqHZRNpRqNBRPRPq  LlMmJfvDVVTJSmVMscsCFtvwcjWjrjCj  NVVMGWFSMRVGWSthwhTJWzcJCcJsTs  jqRLqlfRZcmjcCzT  rlRRrdrflpdvPbHpflfPlfDBgBMQpGVQMgpVDGMggBDV  VwRhccRsnQStRhtGQVQVsmjgDgqJdggDjqLDgJlLzmLl  BWFZpWHBNCBCNBzBNvWBpzHZqqlMqgNdlllDdqDgJDLlfDdd  pFbTrrrBzbzTtSwStQnnsrVn  DRfFbFqzbddfPFtsJnJRsnClJRsn  cgjgQgWvSLVQgmWWgWVjVSSSBTltThLnqJssnTCZsTThntZT  qjwpSrmWgcSrGMfdFDFdwHFd  RWjDDWDjDNjjgDtSRRgjcjzFpnzwdFbFNdbFbpnldwFF  vQfPfTQJbZdThTzL  PrBQJQsfQqrrbfmPqMBfJbggjRVgWjttsHRSgRctDjSs  NgqNWqqWWdnJdqpBNFtCmJGCDHttDGDsHsHm  BjvzhRLTrTBQhTMQRjRRcjPGtmDCZZDZSCmmMSSZmVmSSt  vQzRvRzQcPcvfQzRnddppFgnFfWwBFlb  nnPvfvgrtPDHgvvGTRRRPZQGpGCLLV  FlBsBdbllFdfWpbGMCVMZLVbZQ  lhchNcqFsJBlBszztvwHjvzgrzmzffgH  zZhdjTpJJpjmmpPZhvqnnZHqZcggvgMbgv  tFpFQFSFtBGlFNwFfNMnHfbHcnvcvcfvcqrM  GBFlNLSNVGVSSGtQSLLBBlNtphDdzpmmPmTPhRmdzdVCCDdR  rpRCCDLpmnCdJCjn  vMhSFvgsMGLmnmWMmm  wVqFFvwvPPHhFhhgHPwHshpqrDDzqlfRbpftRLblrllr  CRNDzdJCVDWzVgDjdjzRJzWRMTbHsMNZNbZMMbsfhTtMTLMB  wSlwQcSpqPpcqcqFSqpwslsTfZtLhtlthtBHtTMZ  SPGFGFFmpcPGDrWDmjDJVffR  dsmdtJthJphWqHRPnRRsvvnnfR  cDBMDDDlBZglDZTMDfzVvNRrvNPVHzRRTV  PGMCCDClBDDbbFqmmhqQdpWGmmWp  BJjcGhcvCnBdGHsmHSzZDzSDMHmRMQ  qLWPLVrTwWlwwwrfrFfGDNmDQRMbQMzzmmbQLNMM  rVWrFlGqlqwVwVGgWGphnvgBBsnvsjdBnCBnBg  sNNsfBsmcGmgNTcHHSpnTWHnpV  QlrhlrlMglhDQrdFblvFtMdnDWwSHDWWwnTSjLwVDSwwwT  QtdMvltZhbFlPPZbQtQthZQdqCsJJGzBqqCBmCNCqgRCBsfP  SZnQnnHRWRQRVjHnqlJTQPfdlqfJftqG  pDzmbDBFbBLvvzttfdlTTl  gsDLLpcmsSZVwlnRsV  LHsWjwjWqCLsqCHcLsjdLqcdbpMGZPPtBhthbZBpBhMllwPG  VFnVbbvJSfbgphSpGlhRBBSP  JrrTgmFgzvNbrmNnmnvzgTLjCQWDLDCsTjssjqcHLc  QmwwqTqsrdqNNqgtvnVDVcGNNtvv  WBFBpzzjSJBJzJbfntgPzVzcvPnzDf  HcpbHZJBFpjpcSZrZsdRQZrCwrwd  JqmLmbtTWThBTWvWGVSrrVDsSGSG  wwzRzNjNNbsPVPds  jfgQRZwpQclQfffHgpRpwpfTcqtLLqCbbFFFLmbmTTBnFB  fGpcccNNqcctqGMprvMPmbbzFSflSRzPBBlBbS  JCjnjTZTTGPSGmTFPb  ZWHhJjHLDVDgHLLDGjnhctsstwqctNwWqNwwQrtv  sDwQhcwhBDDwrhGsQnRBQHHMHHMNJMZFCFRbCRftMM  zjjlmjqfdTqlWdzTqmLzlzVjNCHJNHNFMFtbJNZgVNMMCCtN  vPTfLmPTLWBsPDnSscnS  ngznwDPPTzhPPDCTQnTTDQBQqHNNrHFVppbbjRFFqFhHqRqr  tZJtcGsGtLLcctRqVBbbqrspbHNq  BmZSvGBMdWPzMPgnnz  MpNWPVNWWZWVVNZHVcvJjgBjJMStMJSjjg  rzdCzrCTTLRCslvJDSjjdScgDm  RLhCQzqTCssThRQzRzwGQrrCFffbfWppNpWNWVcHqZbHpVPp  zQzCVWdSSjCdjpchWcGftflGZcgG  RwnJTJwmvFHTBFmtBccZZfBGMstllM  wwvvHRwqDnHFrmqnrSbQVVQfSbqQjbqjbQ  ttDftStSlftPgSHmJbFwnMnFwzbrLHMMzz  GqTBqhBqBvppBvMMTznrCbCnLwfr  RBjjpZZvvZqGcNhjjpNmDPfDcsgfDfgScsQQQg  rsSFccvBHppHPsvQrSHSprFjnbLGdbzLfbGLLtLjjzLzvl  JWWJhmwwTDTGtnzlhdbtLG  CWNqWRNCwnCJVppQFFFFNrgHBB  MSRVnMjnVRVnPlcsrtMtschgDl  NWHBwJBwBBQCHHqwWQGBNgdrFFtsthcqdltdDsqttq  CCTTGCNCCBfNJNNWbGGnvVzDSRfDRSZvLPSzRn  MpRfjRjWpZzzzRzZSpjzZjTCQcGdHLWNGqdBdcBWWBLccn  lrbrsPQDPQglDtwggcLCqnCdNNdHBLsqNd  blwbJggvgbwlvQbvtgwmvVwRfTzfMMjFVfSFjZjMTSTSzj  ttSGjHWVrwWrWWvhzvhmhDfR  qMBdNNsccQgfDRzRmqlhRl  gQJdfJPdQBsMggMjPrTCLjrGrCrtVT  tGFdlwDwGFdNtStghWWdQFSnTVfCfZhrfVTVCVprnRRhVn  cLsBPQJsQPmbmPHTnRRnHprCVfns  MjmvPqqQjPbQzjLwwDWDSlzSlGSgwl  NSCpFgfbscbZZZwrtgPZJT  zGCQlVGmmQGVqqJwGtHZGrPHHRTH  qQvVmvzmqCdhhjzCQLjljLQMnMDSFWcSfnMfpbfnNcFFbFDN  zFgqjQBmWNlWlfHrHdLc  wnbCpSSZZTJSJSnmdrtHfGtftlcpltpH  ZSwhVPPJgNVmNFzs  WNVJthVHRRfLqpqN  gdCGcCgJBCrgScRLzbjQQLfRRR  SCFdGSFvlhTJsnvW  FFZwFZZwRmFFhHtNLNLGRtsqjLMt  gbDnnrMbMCffMPbPLNjGNlcppNtspp  rgbzrzDrgVgnrBzFWMWmWBwHWHShSB  zjRVjDqzRjvSBnBGGsfsrFsV  fLccLLZpJMctwJWWWJWpJGCwFwsgnngFBPsCnnTBPT  LbJlZNWMtpMlHRNHzdfSDfdj  VGbbnJGSTsVTssTTnVVWMtfBBmvftRHfHBMJJfZp  ghqtrzgPrjdzQCjmZMHfRHZHBmQmmB  gltFtDqFVlTVWlTl  HqNqZDTvNvVTLPSTvzfrfHfdndffwnbdnwrH  MpSJlFcMJmcpFlmClcMcRnWbWtthrnfwnCGrrWfrwC  RjcJJmSFMRQpMRFjMNVvTZjNPPvLTBPBBB  MzClDtlzJzFzNGGm  bjcLRHlTBsFJGmRm  HcPSSfTSpLZLbSwtrtvMnlDCDPCl  gWWgQJCsVhgRLCWsdjpmcBHvfvrrnvCvBB  TqDtztqtStlbNTPtllqZpvmcFHjNjvjNvHvmrrmj  ztPPGZqTPSbJgchGgwRQgQ  wVrdtTqtCCvbNgbNTTDN  mhGzWhGzMGWGrRmbFLBHZRNHNvZvgB  hhGhShpnsSrqVCVSSj  HnlbmGnlHZHnlBcjgwfDVfwLsGLGLDgR  WhWMWTvQPWPLDMFRCDMsVD  QdzJQPSPZqJnJRnZ  TTjTjFBcRBGjwsDTBLmrCftfRVrrCftCVNRP  WnqbJWnnQJhSqVfVPfDnggfrVN  hSlDMllvhbQqllZlSWQdSQTBjsFHBjTwGdHBTBszLzcc  rNWqWDLZWcqFqLLLgQQJnndnQdNzzJVMzd  cPtsPvChtRsGswHPGbwcPcdVnpzvnmBmVvJBJdJVJdzn  PfRfRGtsHsSRftbbbbHhwCCsjZgSTgSZWDTcgDZjLqgqFWLq  BNzPnPJNNMwHJRhBGRWRdjFQddFlFjWd  npbZrgnLSCSrWFjjdlZGlcDF  gqtmmngSbmgHJqfqzNBHBJ  stgzttBPRRRdpSVVpdpS  WJFcLQmJZHcCFLJmcZLMfbpGSWMNpGftSSpMrb  mcvvQvHmtLCJmHZQHZHCDHJJnjqPjjPzwvwhnwPqTjPBzPnB  DDmbbPqgFSbSQPtPQJttrltJ  CRfcnZWmRRhJNVtsVnQlsp  fcBvWvWzcZWCzTTCTTvccFMBHGDdSwGFFbqwFSGSmF  tCRBPCPRjzsJszBmtjmCvSpHcppJpvZdHHHcHZJG  qbrlLnWlQDQDNvmHHHHcrZZvdm  nmnWnnWmgQsCFzFCRVCg  sHMHCDZfcwMcRcLMcZDCRCHMPdJqgjvVdvqgdgfdJbQgvWQb  FFhTzmzGrnmtjTBjBBprrmFtqGgQqvVdPbbgqQQWJvvWJQqV  TrNjrnFSlwNZNlNL  JQGdsdzSzsdFQFSdssnndNlZjNPTJZNljVjTPhVPhT  GgGLfRmHGLhNVjjNTLhV  HvGvwpbHHRwpBrvBgSSzSFndtzndCrsFMd  DptFshMrhDhDwmPPhwSNhmmS  RLdcdRvBjnvRVcvlcLbCcbCwwpGBwSmfZqqPPPPwzmfqZq  VlRLvVjCJLnlpvvRdllLcJJWDHgMMHDDHtWFFDDQgH  SsSdrndpDlCdLftd  VGPVJgmQrVGHHZfwLlfCTmfwlDlT  PcJHcGgcWWbJpjRrphRbFpRn  PdPSMHMLzPPSShBdffMMzMRHQQrpppcqTCQQpCccTGTRCnCQ  vsbWmFbmJmZFFsmsbfpGVrGnWrrpVpnnVcTV  JZslstfZNNSSPdlSMwlM  bLLzRzZLbRqJJrDGGVZdwssDvGQw  FCtNJlTFtmPfldSvDvQFVVsjSv  PmCPHBhhPpWLWgzgHJ  qwmwFHCgPgPPqPwMCrHHFBVVRBttVRRffVfmsjVNNB  WSvcSnvbSWbhcbjlQbvlSQhlfBGcspVVsVGfVscpzpNcpBtN  hJSLhlvlTjPFHMLCCq  bggDpTggncGVVWbQcG  sRvSwwwFBSpFzvRvMFZqmPmMVqmcmPPVqhqqWq  SRBBrFZZwrddBFRjlptnLgDnTggdtd  PPfMcZMflbMQcMllPVfTVMwjWWmZvpWWpWhhjjpdWWww  sDQNnzsnQgDNsFzFqtGjGmWWSpWrGhdpvphdSW  nNQNqLBHLqzDnHgnVJfPJPCRBbfCcJlT  fppppWsjcSDPjjDpGhgwbfTgHTCbHJwbHbTR  rLBdQnvMNMmFPbLqHqTqgLHCgL  nrFznvMNMQdttrBcScsDstWcPGtWSc  lclnRSDnGZtvSwnZDZzhLffqdsCNwTBCBBdNsd  mPjmjmrFFpmQjMJQjlNdlhCsCLsTlNLs  ggmrHHVVQVPJpWrgpWScRvzZzGGRnZvlgzZn  GjGJGQJGcMTVfFDQzNVQzP  mHqdbmmdnJqVzVhRVNzPbR  wStmHJsJsLZLjTvM  QssMbVGdMQjZPjwVwHVZPZClllvgSgvlTgwwSSCgSCtC  WmmFBmJrcFRBFrJJBFchzWCStgCTgvhvTlfsNqfTlvTv  sFzzssDLzrBPjDVVddHMQD  fztDZSGrNrlnbnPTgFFpln  jvvQMMcLcjJmQwHdJvjQJnnbTbRFRphnnpsWgmFRPR  vTLHHCQLHBBjJCSZrVCZtSfSfrft  gHfHffHLjwHrRjLrLRZVMnTdTBsNTBwTVBsBnN  DWPhqhhDhvSGvWPzSzMBQBQVMMBBmvssvQvQ  CDGbqCDbChSbWGrHcHRgbcVcfrLJ  frlTLmtllbbbdpJS  qFjhzjThjHTFGHTjqhhjMzBhVpVpdbBnSJQRpBnVVdbRRQJd  vjWPWjWPPPWgwmfCrNvTvZ";

inputArray = Array.from(input.split("  "));

/* Solution to the first part
sum=0;

for(i=0; i<inputArray.length; i++){
    inspect = inputArray[i];
    elementArray = inspect.split("");
    for(j=0; j<elementArray.length/2; j++){
         firstHalfOfElementArray.push(elementArray[j]);
         }
    for(j=elementArray.length/2; j<elementArray.length; j++){
        secondHalfOfElementArray.push(elementArray[j]);
    }
     elementArray = firstHalfOfElementArray.filter(value => secondHalfOfElementArray.includes(value));
     
     if(elementArray[0].charCodeAt(0)>91)value = elementArray[0].charCodeAt(0)-96;
     else value = elementArray[0].charCodeAt(0)-64+26;
     sum+=value;
     
     
     firstHalfOfElementArray = [];
     secondHalfOfElementArray = [];
}

console.log(sum);
console.log(value);
console.log(elementArray[0]);

*/

//Solution to the second part
sum=0;

for(i=0; i<inputArray.length; i=i+3){
    inspect = inputArray[i];
    inspect2 = inputArray[i+1];
    inspect3 = inputArray[i+2];
    elementArray = inspect.split("");
    elementArray2 = inspect2.split("");
    elementArray3 = inspect3.split("");


    intersectArray = elementArray.filter(value => elementArray2.includes(value));
    
    intersectArray = intersectArray.filter(value => elementArray3.includes(value));
   
     if( intersectArray[0].charCodeAt(0)>91)value = intersectArray[0].charCodeAt(0)-96;
     else value = intersectArray[0].charCodeAt(0)-64+26;
     sum+=value;
     
     
     firstHalfOfElementArray = [];
     secondHalfOfElementArray = [];
}

console.log(sum);
console.log(value);
console.log(intersectArray[0]);