module.exports = (req, res) => {
    const isIpCheckEnabled = process.env.IS_IPCHECK_ING === 'ipchick.com';
    res.status(200).json({ isIpCheckEnabled });
};
