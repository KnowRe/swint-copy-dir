var os = require('os'),
	path = require('path'),
	fs = require('fs'),
	assert = require('assert'),
	swintHelper = require('swint-helper'),
	swintCopyDir = require('../lib');

describe('copy-dir', function() {
	it('Error when no callback', function() {
		assert.throws(function() {
			swintCopyDir({});
		});
	});

	it('Error when inDir doesn\'t exist', function(done) {
		swintCopyDir({
			inDir: '/this-directory-does-not-exist'
		}, function(err, res) {
			assert.notEqual(err, null);
			done();
		});
	});

	it('Common case', function(done) {
		var options = {
			inDir: path.join(__dirname, '../test_case'),
			outDir: path.join(os.tmpdir(), 'swint-copy-dir')
		};

		swintCopyDir(options, function(err, res) {
			var inDir = swintHelper.walk({ dir: options.inDir }).map(function(p) {
					return p.replace(path.join(__dirname, '../test_case'), '');
				}),
				outDir = swintHelper.walk({ dir: options.outDir }).map(function(p) {
					return p.replace(path.join(os.tmpdir(), 'swint-copy-dir'), '');
				});

			assert.deepEqual(inDir, outDir);
			done();
		});
	});

	after(function() {
		fs.unlinkSync(path.join(os.tmpdir(), 'swint-copy-dir/folder2/folder3/file3.txt'));
		fs.unlinkSync(path.join(os.tmpdir(), 'swint-copy-dir/folder2/file2.txt'));
		fs.unlinkSync(path.join(os.tmpdir(), 'swint-copy-dir/folder1/file1.txt'));
		fs.rmdirSync(path.join(os.tmpdir(), 'swint-copy-dir/folder2/folder3'));
		fs.rmdirSync(path.join(os.tmpdir(), 'swint-copy-dir/folder2'));
		fs.rmdirSync(path.join(os.tmpdir(), 'swint-copy-dir/folder1'));
		fs.rmdirSync(path.join(os.tmpdir(), 'swint-copy-dir'));
	});
});
